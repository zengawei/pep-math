import { describe, it, expect } from 'vitest';
import { exerciseSchema, exampleSchema, definitionSchema } from '../../src/content/config';

describe('Content Collections Schema', () => {
  describe('exerciseSchema', () => {
    it('accepts a valid exercise', () => {
      const valid = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        number: 1,
        difficulty: 'basic' as const,
        is_exam_question: false,
        knowledge_points: ['set-concept'],
        source: '人教A版2019' as const,
        references: '必修第一册 P5 练习A 第1题',
      };
      const result = exerciseSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it('rejects missing required fields', () => {
      const invalid = {
        type: 'exercise',
        textbook: 'required-1',
      };
      const result = exerciseSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });

    it('rejects invalid difficulty', () => {
      const invalid = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        number: 1,
        difficulty: 'expert',
        knowledge_points: ['set-concept'],
        source: '人教A版2019' as const,
        references: '必修第一册 P5',
      };
      const result = exerciseSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });

    it('rejects empty knowledge_points array', () => {
      const invalid = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        number: 1,
        difficulty: 'basic' as const,
        knowledge_points: [],
        source: '人教A版2019' as const,
        references: '必修第一册 P5',
      };
      const result = exerciseSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });

    it('defaults is_exam_question to false', () => {
      const data = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        number: 1,
        difficulty: 'basic' as const,
        knowledge_points: ['set-concept'],
        source: '人教A版2019' as const,
        references: '必修第一册 P5',
      };
      const result = exerciseSchema.parse(data);
      expect(result.is_exam_question).toBe(false);
    });

    // === v2 schema tests ===

    it('accepts category field with value "practice"', () => {
      const valid = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        number: 1,
        difficulty: 'basic' as const,
        knowledge_points: ['set-concept'],
        source: '人教A版2019' as const,
        references: '必修第一册 P5',
        category: 'practice' as const,
      };
      const result = exerciseSchema.safeParse(valid);
      expect(result.success).toBe(true);
      expect(result.success && result.data.category).toBe('practice');
    });

    it('accepts category field with value "review"', () => {
      const valid = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 0,
        number: 1,
        difficulty: 'medium' as const,
        knowledge_points: ['set-concept'],
        source: '人教A版2019' as const,
        references: '必修第一册 P20 复习参考题',
        category: 'review' as const,
      };
      const result = exerciseSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it('accepts category field with value "reference"', () => {
      const valid = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 0,
        number: 1,
        difficulty: 'hard' as const,
        knowledge_points: ['set-concept'],
        source: '人教A版2019' as const,
        references: '必修第一册 P22 参考题',
        category: 'reference' as const,
      };
      const result = exerciseSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it('defaults category to "practice" when omitted', () => {
      const data = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        number: 1,
        difficulty: 'basic' as const,
        knowledge_points: ['set-concept'],
        source: '人教A版2019' as const,
        references: '必修第一册 P5',
      };
      const result = exerciseSchema.parse(data);
      expect(result.category).toBe('practice');
    });

    it('rejects invalid category value', () => {
      const invalid = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        number: 1,
        difficulty: 'basic' as const,
        knowledge_points: ['set-concept'],
        source: '人教A版2019' as const,
        references: '必修第一册 P5',
        category: 'homework',
      };
      const result = exerciseSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });

    it('accepts optional group field A/B/C', () => {
      for (const group of ['A', 'B', 'C'] as const) {
        const valid = {
          type: 'exercise' as const,
          textbook: 'required-1' as const,
          chapter: 1,
          section: 1,
          number: 1,
          difficulty: 'basic' as const,
          knowledge_points: ['set-concept'],
          source: '人教A版2019' as const,
          references: '必修第一册 P5',
          group,
        };
        const result = exerciseSchema.safeParse(valid);
        expect(result.success).toBe(true);
      }
    });

    it('group is optional (undefined when omitted)', () => {
      const data = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        number: 1,
        difficulty: 'basic' as const,
        knowledge_points: ['set-concept'],
        source: '人教A版2019' as const,
        references: '必修第一册 P5',
      };
      const result = exerciseSchema.parse(data);
      expect(result.group).toBeUndefined();
    });

    it('rejects invalid group value', () => {
      const invalid = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        number: 1,
        difficulty: 'basic' as const,
        knowledge_points: ['set-concept'],
        source: '人教A版2019' as const,
        references: '必修第一册 P5',
        group: 'D',
      };
      const result = exerciseSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });

    it('accepts section=0 for chapter review exercises', () => {
      const valid = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 0,
        number: 1,
        difficulty: 'medium' as const,
        knowledge_points: ['set-concept'],
        source: '人教A版2019' as const,
        references: '必修第一册 P20',
        category: 'review' as const,
      };
      const result = exerciseSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it('rejects source "自编" (old value)', () => {
      const invalid = {
        type: 'exercise' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        number: 1,
        difficulty: 'basic' as const,
        knowledge_points: ['set-concept'],
        source: '自编' as const,
        references: '课标1.1.1',
      };
      const result = exerciseSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });
  });

  describe('exampleSchema', () => {
    it('accepts a valid example', () => {
      const valid = {
        type: 'example' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        number: 1,
        knowledge_points: ['set-concept'],
      };
      const result = exampleSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it('accepts example with source and references', () => {
      const valid = {
        type: 'example' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        number: 1,
        knowledge_points: ['set-concept'],
        source: '人教A版2019',
        references: '必修第一册 P3 例1',
      };
      const result = exampleSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });
  });

  describe('definitionSchema', () => {
    it('accepts a valid definition', () => {
      const valid = {
        type: 'definition' as const,
        textbook: 'required-1' as const,
        chapter: 1,
        section: 1,
        name: '集合',
        related_knowledge_points: ['set-concept'],
      };
      const result = definitionSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });
  });
});
