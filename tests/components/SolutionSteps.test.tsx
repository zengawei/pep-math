import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SolutionSteps from '../../src/components/SolutionSteps';

const mockSteps = [
  { title: '第一步', knowledge_point: 'set-concept', content: '确定集合元素' },
  { title: '第二步', knowledge_point: 'set-operations', content: '求交集' },
];

describe('SolutionSteps', () => {
  it('renders all steps', () => {
    render(<SolutionSteps steps={mockSteps} />);
    expect(screen.getByText('第一步')).toBeTruthy();
    expect(screen.getByText('第二步')).toBeTruthy();
  });

  it('renders knowledge point links', () => {
    render(<SolutionSteps steps={mockSteps} />);
    const links = document.querySelectorAll('a[href*="/knowledge/"]');
    expect(links.length).toBe(2);
  });

  it('renders warning when provided', () => {
    render(<SolutionSteps steps={mockSteps} warning="注意互异性" />);
    expect(screen.getByText(/注意互异性/)).toBeTruthy();
  });

  it('renders summary when provided', () => {
    render(<SolutionSteps steps={mockSteps} summary="方法总结" />);
    expect(screen.getByText(/方法总结/)).toBeTruthy();
  });
});
