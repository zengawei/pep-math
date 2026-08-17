import DifficultyBadge from './DifficultyBadge';

interface ExerciseMeta {
  id: string;
  textbook: string;
  chapter: number;
  section: number;
  number: number;
  difficulty: 'basic' | 'medium' | 'hard';
  knowledge_points: string[];
}

interface RelatedData {
  sameKnowledge: ExerciseMeta[];
  sameType: ExerciseMeta[];
}

interface RelatedExercisesProps {
  related: RelatedData;
}

export default function RelatedExercises({ related }: RelatedExercisesProps) {
  const hasAny = related.sameKnowledge.length > 0 || related.sameType.length > 0;

  if (!hasAny) {
    return <p className="text-gray-400 text-sm">暂无关联习题</p>;
  }

  return (
    <div className="space-y-4">
      {related.sameKnowledge.length > 0 && (
        <div>
          <h4 className="font-medium text-sm mb-2">🔗 同知识点、不同题型</h4>
          <ul className="space-y-1">
            {related.sameKnowledge.map((ex) => (
              <li key={ex.id} className="flex items-center gap-2">
                <a
                  href={`#exercise-${ex.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  第{ex.chapter}章 第{ex.section}节 第{ex.number}题
                </a>
                <DifficultyBadge difficulty={ex.difficulty} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {related.sameType.length > 0 && (
        <div>
          <h4 className="font-medium text-sm mb-2">🔄 同题型、不同知识点</h4>
          <ul className="space-y-1">
            {related.sameType.map((ex) => (
              <li key={ex.id} className="flex items-center gap-2">
                <a
                  href={`#exercise-${ex.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  第{ex.chapter}章 第{ex.section}节 第{ex.number}题
                </a>
                <DifficultyBadge difficulty={ex.difficulty} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
