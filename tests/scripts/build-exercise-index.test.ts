import { describe, it, expect, beforeAll } from 'vitest';
import { buildExerciseIndex, type ExerciseMeta } from '../../scripts/build-exercise-index';
import path from 'path';

describe('buildExerciseIndex', () => {
  let index: ExerciseMeta[];
  let byKp: Record<string, ExerciseMeta[]>;
  let byDifficulty: Record<string, ExerciseMeta[]>;

  beforeAll(() => {
    const contentDir = path.resolve(__dirname, '../../src/content/textbooks');
    const result = buildExerciseIndex(contentDir);
    index = result.index;
    byKp = result.byKp;
    byDifficulty = result.byDifficulty;
  });

  it('should extract all exercises from markdown files', () => {
    expect(index.length).toBe(285);
  });

  it('should sort exercises by difficulty within each knowledge point', () => {
    const setOps = byKp['set-operations'];
    expect(setOps).toBeDefined();
    // basic should come before medium
    const difficulties = setOps.map(e => e.difficulty);
    const basicIdx = difficulties.indexOf('basic');
    const mediumIdx = difficulties.indexOf('medium');
    if (basicIdx >= 0 && mediumIdx >= 0) {
      expect(basicIdx).toBeLessThan(mediumIdx);
    }
  });

  it('should generate by-difficulty index', () => {
    expect(byDifficulty['basic']?.length).toBeGreaterThanOrEqual(1);
    expect(byDifficulty['medium']?.length).toBeGreaterThanOrEqual(1);
  });

  it('should generate correct exercise IDs', () => {
    const ids = index.map(e => e.id);
    expect(ids).toContain('required-1-ch1-s1-ex1');
    expect(ids).toContain('required-1-ch1-s1-ex2');
    expect(ids).toContain('required-1-ch1-s1-ex3');
  });

  it('should include knowledge_points for each exercise', () => {
    const ex1 = index.find(e => e.id === 'required-1-ch1-s1-ex1');
    expect(ex1).toBeDefined();
    expect(ex1!.knowledge_points).toContain('set-concept');
    expect(ex1!.knowledge_points).toContain('set-representation');
  });

  it('should aggregate exercises by knowledge point', () => {
    // set-concept appears in many exercises after Plan 2 expansion
    const setConcept = byKp['set-concept'];
    expect(setConcept).toBeDefined();
    expect(setConcept.length).toBeGreaterThanOrEqual(2);
  });

  it('should include category field (defaults to practice)', () => {
    const ex1 = index.find(e => e.id === 'required-1-ch1-s1-ex1');
    expect(ex1).toBeDefined();
    expect(ex1!.category).toBe('practice');
  });

  it('should include group field (undefined when not set)', () => {
    const ex1 = index.find(e => e.id === 'required-1-ch1-s1-ex1');
    expect(ex1).toBeDefined();
    // existing files don't have group, should be undefined
    expect(ex1!.group).toBeUndefined();
  });
});
