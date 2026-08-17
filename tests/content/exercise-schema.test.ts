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
        source: '自编' as const,
        references: '课标1.1.1',
      };
      const result = exerciseSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it('rejects missing required fields', () => {
      const invalid = {
        type: 'exercise',
        textbook: 'required-1',
        // missing chapter, section, number, etc.
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
        difficulty: 'expert', // not in enum
        knowledge_points: ['set-concept'],
        source: '自编' as const,
        references: '课标1.1.1',
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
        knowledge_points: [], // min(1) violated
        source: '自编' as const,
        references: '课标1.1.1',
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
        source: '自编' as const,
        references: '课标1.1.1',
      };
      const result = exerciseSchema.parse(data);
      expect(result.is_exam_question).toBe(false);
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
