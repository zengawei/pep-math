import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DifficultyBadge from '../../src/components/DifficultyBadge';

describe('DifficultyBadge', () => {
  it('renders basic with green color', () => {
    render(<DifficultyBadge difficulty="basic" />);
    const badge = screen.getByText('基础');
    expect(badge).toBeTruthy();
    expect(badge.className).toContain('green');
  });

  it('renders medium with yellow color', () => {
    render(<DifficultyBadge difficulty="medium" />);
    const badge = screen.getByText('中等');
    expect(badge).toBeTruthy();
    expect(badge.className).toContain('yellow');
  });

  it('renders hard with red color', () => {
    render(<DifficultyBadge difficulty="hard" />);
    const badge = screen.getByText('拔尖');
    expect(badge).toBeTruthy();
    expect(badge.className).toContain('red');
  });
});
