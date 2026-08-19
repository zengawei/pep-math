import katex from 'katex';
import 'katex/dist/katex.min.css';

const base = '/pep-math';

function renderMathIn(el: HTMLElement) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
  const textNodes: Text[] = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text);
  }

  for (const node of textNodes) {
    const text = node.textContent || '';
    if (!text.includes('$')) continue;

    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    const regex = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }

      const formula = match[1];
      const isDisplay = formula.startsWith('$$');
      const tex = isDisplay ? formula.slice(2, -2) : formula.slice(1, -1);

      try {
        const span = document.createElement('span');
        katex.render(tex, span, {
          displayMode: isDisplay,
          throwOnError: false,
        });
        fragment.appendChild(span);
      } catch {
        fragment.appendChild(document.createTextNode(formula));
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    node.parentNode?.replaceChild(fragment, node);
  }
}

function escapeHtml(str: string) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  // Exercise click-to-expand
  document.querySelectorAll('[id^="exercise-"]').forEach((el) => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', async () => {
      const exId = el.id.replace('exercise-', '');
      const existing = el.querySelector('.exercise-detail');
      if (existing) {
        existing.remove();
        return;
      }
      try {
        const resp = await fetch(`${base}/data/exercises/${exId}.json`);
        const data = await resp.json();

        let html = '';
        html += `<div class="font-medium mb-3">${escapeHtml(data.question)}</div>`;

        if (data.steps && data.steps.length > 0) {
          html += '<div class="space-y-3 mb-3">';
          data.steps.forEach((step: any, i: number) => {
            html += `<div class="border-l-2 border-blue-300 pl-3">`;
            html += `<div class="font-medium text-blue-700">第${i + 1}步：${escapeHtml(step.title)}</div>`;
            html += `<div class="text-xs text-blue-500 mb-1">📌 运用知识点：${escapeHtml(step.knowledge_point)}</div>`;
            html += `<div class="text-gray-700">${escapeHtml(step.content)}</div>`;
            html += `</div>`;
          });
          html += '</div>';
        }

        if (data.warning) {
          html += `<div class="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-yellow-800">⚠️ 易错提醒：${escapeHtml(data.warning)}</div>`;
        }

        if (data.summary) {
          html += `<div class="mt-2 p-2 bg-green-50 border border-green-200 rounded text-green-800">💡 解题思路总结：${escapeHtml(data.summary)}</div>`;
        }

        const detail = document.createElement('div');
        detail.className = 'exercise-detail mt-2 p-3 bg-gray-50 rounded text-sm';
        detail.innerHTML = html;
        el.appendChild(detail);

        renderMathIn(detail);
      } catch (e) {
        console.error('Failed to load exercise:', e);
      }
    });
  });

  // Example click-to-expand
  document.querySelectorAll('[id^="example-"]').forEach((el) => {
    el.addEventListener('click', async () => {
      const egId = el.id.replace('example-', '');
      const existing = el.querySelector('.example-detail');
      if (existing) {
        existing.remove();
        return;
      }
      try {
        const resp = await fetch(`${base}/data/examples/${egId}.json`);
        const data = await resp.json();

        let html = '';
        html += `<div class="font-medium mb-3">${escapeHtml(data.question)}</div>`;

        if (data.steps && data.steps.length > 0) {
          html += '<div class="space-y-3 mb-3">';
          data.steps.forEach((step: any, i: number) => {
            html += `<div class="border-l-2 border-purple-300 pl-3">`;
            html += `<div class="font-medium text-purple-700">第${i + 1}步：${escapeHtml(step.title)}</div>`;
            if (step.knowledge_point) {
              html += `<div class="text-xs text-purple-500 mb-1">📌 运用知识点：${escapeHtml(step.knowledge_point)}</div>`;
            }
            html += `<div class="text-gray-700">${escapeHtml(step.content)}</div>`;
            html += `</div>`;
          });
          html += '</div>';
        }

        if (data.warning) {
          html += `<div class="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-yellow-800">⚠️ 注意：${escapeHtml(data.warning)}</div>`;
        }

        if (data.summary) {
          html += `<div class="mt-2 p-2 bg-green-50 border border-green-200 rounded text-green-800">💡 解题思路总结：${escapeHtml(data.summary)}</div>`;
        }

        const detail = document.createElement('div');
        detail.className = 'example-detail mt-2 p-3 bg-gray-50 rounded text-sm';
        detail.innerHTML = html;
        el.appendChild(detail);

        renderMathIn(detail);
      } catch (e) {
        console.error('Failed to load example:', e);
      }
    });
  });
});
