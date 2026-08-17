import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathFormulaProps {
  formula: string;
  displayMode?: boolean;
}

export default function MathFormula({ formula, displayMode = false }: MathFormulaProps) {
  const html = katex.renderToString(formula, {
    displayMode,
    throwOnError: false,
    errorColor: '#cc0000',
  });

  if (displayMode) {
    return <div className="katex-display" dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
