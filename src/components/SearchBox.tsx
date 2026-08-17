import { useState, useEffect, useCallback } from 'react';

interface SearchResult {
  url: string;
  title: string;
  excerpt: string;
}

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }

    setLoading(true);
    setSearched(true);

    try {
      // pagefind is loaded at runtime from the build output
      const pagefindPath = '/pep-math/pagefind/pagefind.js';
      const pagefind = await (window as any).__pagefindModule
        || await import(/* @vite-ignore */ pagefindPath);
      const searchResults = await pagefind.search(searchQuery);

      const data = await Promise.all(
        searchResults.slice(0, 20).map(async (r: any) => {
          const d = await r.data();
          return {
            url: d.url,
            title: d.meta?.title || 'Untitled',
            excerpt: (d.excerpt || '').substring(0, 200),
          };
        })
      );

      setResults(data);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query, performSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜索题目、知识点、定义..."
          className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
        >
          搜索
        </button>
      </form>

      {loading && <p className="text-gray-500 mt-4 text-sm">搜索中...</p>}

      {searched && !loading && results.length === 0 && (
        <p className="text-gray-500 mt-4 text-sm">没有找到相关结果</p>
      )}

      {results.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-3">找到 {results.length} 个结果</p>
          {results.map((result) => (
            <div key={result.url} className="border-b py-3">
              <a href={result.url} className="text-blue-600 font-medium hover:underline">
                {result.title}
              </a>
              <p className="text-sm text-gray-600 mt-1">{result.excerpt}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
