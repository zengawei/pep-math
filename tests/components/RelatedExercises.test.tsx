import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RelatedExercises from '../../src/components/RelatedExercises';

const mockRelated = {
  sameKnowledge: [
    { id: 'required-1-ch1-s1-ex2', textbook: 'required-1', chapter: 1, section: 2, number: 1, difficulty: 'medium' as const, knowledge_points: ['set-concept'] },
  ],
  sameType: [
    { id: 'required-1-ch1-s1-ex3', textbook: 'required-1', chapter: 1, section: 1, number: 3, difficulty: 'hard' as const, knowledge_points: ['set-operations'] },
  ],
};

describe('RelatedExercises', () => {
  it('renders same knowledge section', () => {
    render(<RelatedExercises related={mockRelated} />);
    expect(screen.getByText('🔗 同知识点、不同题型')).toBeTruthy();
  });

  it('renders same type section', () => {
    render(<RelatedExercises related={mockRelated} />);
    expect(screen.getByText('🔄 同题型、不同知识点')).toBeTruthy();
  });

  it('renders exercise links', () => {
    render(<RelatedExercises related={mockRelated} />);
    const links = document.querySelectorAll('a');
    expect(links.length).toBeGreaterThanOrEqual(2);
  });

  it('shows empty message when no related exercises', () => {
    const empty = { sameKnowledge: [], sameType: [] };
    render(<RelatedExercises related={empty} />);
    expect(screen.getByText(/暂无/)).toBeTruthy();
  });
});
