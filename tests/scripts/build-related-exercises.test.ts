import { describe, it, expect } from 'vitest';
import { findRelatedExercises, type ExerciseMeta, type RelatedResult } from '../../scripts/build-related-exercises';

describe('findRelatedExercises', () => {
  const exercises: ExerciseMeta[] = [
    { id: 'ex1', textbook: 'required-1', chapter: 1, section: 1, number: 1, difficulty: 'basic', knowledge_points: ['set-concept', 'set-representation'] },
    { id: 'ex2', textbook: 'required-1', chapter: 1, section: 1, number: 2, difficulty: 'basic', knowledge_points: ['set-operations'] },
    { id: 'ex3', textbook: 'required-1', chapter: 1, section: 2, number: 1, difficulty: 'medium', knowledge_points: ['set-concept'] },
  ];

  it('should find exercises with same knowledge points but different sections', () => {
    const result = findRelatedExercises(exercises[0], exercises);
    // ex3 has set-concept and is in section 2 (different from ex1's section 1)
    expect(result.sameKnowledge).toContain('ex3');
    // ex2 does NOT share knowledge points with ex1
    expect(result.sameKnowledge).not.toContain('ex2');
  });

  it('should find exercises in same section with different knowledge points', () => {
    const result = findRelatedExercises(exercises[0], exercises);
    // ex2 is in same section (1,1) but has different knowledge points
    expect(result.sameType).toContain('ex2');
    // ex3 is in different section
    expect(result.sameType).not.toContain('ex3');
  });

  it('should not include the exercise itself', () => {
    const result = findRelatedExercises(exercises[0], exercises);
    expect(result.sameKnowledge).not.toContain('ex1');
    expect(result.sameType).not.toContain('ex1');
  });
});
