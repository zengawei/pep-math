interface Section {
  number: number;
  title: string;
}

interface Chapter {
  number: number;
  title: string;
  sections: Section[];
}

interface NavigationProps {
  textbookId: string;
  chapters: Chapter[];
  currentChapter: number;
  currentSection: number;
}

export default function Navigation({ textbookId, chapters, currentChapter, currentSection }: NavigationProps) {
  return (
    <nav className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-bold text-sm mb-2">章节导航</h3>
      {chapters.map((chapter) => (
        <div key={chapter.number} className="mb-2">
          <div className={`text-sm ${chapter.number === currentChapter ? 'font-bold text-blue-600' : 'text-gray-700'}`}>
            第{chapter.number}章 {chapter.title}
          </div>
          <ul className="ml-4 mt-1 space-y-0.5">
            {chapter.sections.map((section) => {
              const isCurrent = chapter.number === currentChapter && section.number === currentSection;
              return (
                <li key={section.number}>
                  <a
                    href={`/pep-math/textbook/${textbookId}/chapter/${chapter.number}/section/${section.number}`}
                    className={`text-sm ${isCurrent ? 'font-bold text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
                  >
                    {section.number}. {section.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
