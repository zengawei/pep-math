import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MathFormula from '../../src/components/MathFormula';

describe('MathFormula', () => {
  it('renders inline math', () => {
    render(<MathFormula formula="x^2 + 1" displayMode={false} />);
    const el = document.querySelector('.katex');
    expect(el).toBeTruthy();
  });

  it('renders display math', () => {
    render(<MathFormula formula="\\sum_{i=1}^{n} i" displayMode={true} />);
    const el = document.querySelector('.katex-display');
    expect(el).toBeTruthy();
  });

  it('handles invalid LaTeX gracefully', () => {
    render(<MathFormula formula="\\invalid" displayMode={false} />);
    // Should render something (error message from KaTeX) without crashing
    expect(document.querySelector('.katex-error, .katex')).toBeTruthy();
  });
});
