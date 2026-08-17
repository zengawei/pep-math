const difficultyMap = {
  basic: { label: '基础', color: 'bg-green-100 text-green-800' },
  medium: { label: '中等', color: 'bg-yellow-100 text-yellow-800' },
  hard: { label: '拔尖', color: 'bg-red-100 text-red-800' },
};

interface DifficultyBadgeProps {
  difficulty: 'basic' | 'medium' | 'hard';
}

export default function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const { label, color } = difficultyMap[difficulty];
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${color}`}>
      {label}
    </span>
  );
}
