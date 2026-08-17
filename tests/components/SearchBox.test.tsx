import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBox from '../../src/components/SearchBox';

describe('SearchBox', () => {
  it('renders search input', () => {
    render(<SearchBox />);
    const input = screen.getByPlaceholderText(/搜索/);
    expect(input).toBeTruthy();
  });

  it('has search button', () => {
    render(<SearchBox />);
    expect(screen.getByText('搜索')).toBeTruthy();
  });
});
