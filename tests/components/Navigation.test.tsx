import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navigation from '../../src/components/Navigation';

const mockChapters = [
  {
    number: 1,
    title: '集合与常用逻辑用语',
    sections: [
      { number: 1, title: '集合的概念' },
      { number: 2, title: '常用逻辑用语' },
    ],
  },
  {
    number: 2,
    title: '一元二次函数/方程/不等式',
    sections: [
      { number: 1, title: '等式与不等式' },
    ],
  },
];

describe('Navigation', () => {
  it('renders chapter titles', () => {
    render(<Navigation textbookId="required-1" chapters={mockChapters} currentChapter={1} currentSection={1} />);
    expect(screen.getByText(/集合与常用逻辑用语/)).toBeTruthy();
  });

  it('renders section links', () => {
    render(<Navigation textbookId="required-1" chapters={mockChapters} currentChapter={1} currentSection={1} />);
    const links = document.querySelectorAll('a[href*="/section/"]');
    expect(links.length).toBe(3); // 2 sections in ch1 + 1 in ch2
  });

  it('highlights current section', () => {
    render(<Navigation textbookId="required-1" chapters={mockChapters} currentChapter={1} currentSection={1} />);
    const currentLink = screen.getByText(/集合的概念/);
    expect(currentLink.className).toContain('font-bold');
  });
});
