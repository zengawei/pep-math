import MathFormula from './MathFormula';

interface Step {
  title: string;
  knowledge_point: string;
  content: string;
}

interface SolutionStepsProps {
  steps: Step[];
  warning?: string;
  summary?: string;
}

export default function SolutionSteps({ steps, warning, summary }: SolutionStepsProps) {
  return (
    <div className="solution-steps">
      {steps.map((step, i) => (
        <div key={i} className="mb-4 pl-4 border-l-2 border-blue-200">
          <div className="font-medium text-gray-800">{step.title}</div>
          <div className="text-xs text-blue-600 mb-1">
            📌 运用知识点：
            <a
              href={`/pep-math/knowledge/${step.knowledge_point}`}
              className="hover:underline"
            >
              {step.knowledge_point}
            </a>
          </div>
          <div className="text-sm text-gray-700">
            <MathFormula formula={step.content} />
          </div>
        </div>
      ))}
      {warning && (
        <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
          <span className="font-medium">⚠️ 易错提醒：</span>
          <span className="text-sm">{warning}</span>
        </div>
      )}
      {summary && (
        <div className="bg-green-50 border border-green-200 rounded p-3 mt-3">
          <span className="font-medium">💡 解题思路总结：</span>
          <span className="text-sm">{summary}</span>
        </div>
      )}
    </div>
  );
}
