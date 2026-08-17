import { defineCollection, z } from 'astro:content';

const exerciseSchema = z.object({
  type: z.literal('exercise'),
  textbook: z.enum(['required-1', 'required-2', 'selective-1', 'selective-2', 'selective-3']),
  chapter: z.number().int().min(1),
  section: z.number().int().min(1),
  number: z.number().int().min(1),
  difficulty: z.enum(['basic', 'medium', 'hard']),
  is_exam_question: z.boolean().default(false),
  knowledge_points: z.array(z.string()).min(1),
  source: z.literal('自编'),
  references: z.string().min(1),
});

const exampleSchema = z.object({
  type: z.literal('example'),
  textbook: z.enum(['required-1', 'required-2', 'selective-1', 'selective-2', 'selective-3']),
  chapter: z.number().int().min(1),
  section: z.number().int().min(1),
  number: z.number().int().min(1),
  knowledge_points: z.array(z.string()).min(1),
});

const definitionSchema = z.object({
  type: z.literal('definition'),
  textbook: z.enum(['required-1', 'required-2', 'selective-1', 'selective-2', 'selective-3']),
  chapter: z.number().int().min(1),
  section: z.number().int().min(1),
  name: z.string().min(1),
  related_knowledge_points: z.array(z.string()).min(1),
});

const textbookContent = defineCollection({
  type: 'content',
  schema: z.discriminatedUnion('type', [exerciseSchema, exampleSchema, definitionSchema]),
});

const knowledgePoints = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string().min(1),
    category: z.string().min(1),
    description: z.string().min(1),
    prerequisites: z.array(z.string()).default([]),
    follow_ups: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    formulas: z.array(z.string()).default([]),
    common_mistakes: z.array(z.object({
      mistake: z.string(),
      correction: z.string(),
    })).default([]),
    applied_in: z.array(z.object({
      textbook: z.string(),
      chapters: z.array(z.number()),
    })).default([]),
  }),
});

export const collections = {
  textbooks: textbookContent,
  'knowledge-points': knowledgePoints,
};

// 导出 schema 供构建脚本使用
export { exerciseSchema, exampleSchema, definitionSchema };
