import { useState } from 'react';
import DifficultyBadge from './DifficultyBadge';
import MathFormula from './MathFormula';

interface ExerciseStep {
  title: string;
  knowledge_point: string;
  content: string;
}

interface ExerciseData {
  id: string;
  textbook: string;
  chapter: number;
  section: number;
  number: number;
  difficulty: 'basic' | 'medium' | 'hard';
  knowledge_points: string[];
  question: string;
  steps: ExerciseStep[];
  warning?: string;
  summary?: string;
}

interface ExerciseCardProps {
  exercise: ExerciseData;
  defaultExpanded?: boolean;
}

export default function ExerciseCard({ exercise, defaultExpanded = false }: ExerciseCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-gray-500">
          第{exercise.chapter}章 第{exercise.section}节 第{exercise.number}题
        </span>
        <DifficultyBadge difficulty={exercise.difficulty} />
      </div>

      <div className="mb-3">
        <MathFormula formula={exercise.question} />
      </div>

      <div className="flex flex-wrap gap-1 mb-3">
        {exercise.knowledge_points.map((kp) => (
          <a
            key={kp}
            href={`/pep-math/knowledge/${kp}`}
            className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded hover:bg-blue-100"
          >
            {kp}
          </a>
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm text-blue-600 hover:underline"
      >
        {expanded ? '收起解答' : '查看解答'}
      </button>

      {expanded && (
        <div className="mt-3 border-t pt-3">
          {exercise.steps.map((step, i) => (
            <div key={i} className="mb-3">
              <div className="font-medium text-sm">{step.title}</div>
              <div className="text-xs text-gray-500 mb-1">
                📌 运用知识点：
                <a href={`/pep-math/knowledge/${step.knowledge_point}`} className="text-blue-500">
                  {step.knowledge_point}
                </a>
              </div>
              <div className="text-sm">
                <MathFormula formula={step.content} />
              </div>
            </div>
          ))}
          {exercise.warning && (
            <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mt-2 text-sm">
              ⚠️ {exercise.warning}
            </div>
          )}
          {exercise.summary && (
            <div className="bg-green-50 border border-green-200 rounded p-2 mt-2 text-sm">
              💡 {exercise.summary}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
