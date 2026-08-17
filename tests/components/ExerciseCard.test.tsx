import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExerciseCard from '../../src/components/ExerciseCard';

const mockExercise = {
  id: 'required-1-ch1-s1-ex1',
  textbook: 'required-1',
  chapter: 1,
  section: 1,
  number: 1,
  difficulty: 'basic' as const,
  knowledge_points: ['set-concept'],
  question: '用列举法表示集合 $A = \\{x | x < 5, x \\in \\mathbb{Z}^+\\}$',
  steps: [
    { title: '确定元素', knowledge_point: 'set-concept', content: '小于5的正整数为1,2,3,4' },
  ],
  warning: '注意互异性',
  summary: '列举法基本应用',
};

describe('ExerciseCard', () => {
  it('renders exercise question', () => {
    render(<ExerciseCard exercise={mockExercise} />);
    expect(screen.getByText(/用列举法表示集合/)).toBeTruthy();
  });

  it('renders difficulty badge', () => {
    render(<ExerciseCard exercise={mockExercise} />);
    expect(screen.getByText('基础')).toBeTruthy();
  });

  it('renders knowledge point links', () => {
    render(<ExerciseCard exercise={mockExercise} />);
    const link = screen.getByText('set-concept');
    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toContain('/knowledge/set-concept');
  });

  it('shows solution steps when expanded', () => {
    render(<ExerciseCard exercise={mockExercise} defaultExpanded={true} />);
    expect(screen.getByText(/确定元素/)).toBeTruthy();
  });
});
