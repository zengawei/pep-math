import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';
import { buildNceeIndex, loadValidKpIds } from '../../scripts/build-ncee-index';

const NCEE_DIR = path.resolve(__dirname, '../../src/content/textbooks/ncee');
const KP_DIR = path.resolve(__dirname, '../../src/content/knowledge-points');
const DATA_DIR = path.resolve(__dirname, '../../public/data/ncee');

describe('NCEE index integrity', () => {
  let validKpIds: Set<string>;

  beforeAll(() => {
    validKpIds = loadValidKpIds(KP_DIR);
  });

  it('every active ncee question appears in at least one KP index', () => {
    if (!fs.existsSync(NCEE_DIR)) return;

    const { result } = buildNceeIndex(NCEE_DIR, validKpIds);
    for (const m of result.all) {
      const inKpIndex = m.knowledge_points.some(kp =>
        result.byKp[kp]?.some(item => item.ncee_id === m.ncee_id)
      );
      expect(inKpIndex, `${m.ncee_id} not in any KP index`).toBe(true);
    }
  });

  it('no duplicate ncee_id across all files', () => {
    if (!fs.existsSync(NCEE_DIR)) return;

    const { result } = buildNceeIndex(NCEE_DIR, validKpIds);
    const ids = result.all.map(m => m.ncee_id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('is_deprecated questions do not appear in any index', () => {
    if (!fs.existsSync(NCEE_DIR)) return;

    const { result } = buildNceeIndex(NCEE_DIR, validKpIds);
    for (const m of result.all) {
      expect(m.is_deprecated, `${m.ncee_id} should not be deprecated in active index`).toBe(false);
    }
  });

  it('shard index data consistency: same question has same metadata across shards', () => {
    if (!fs.existsSync(DATA_DIR)) return;

    // Load by-year and by-kp, compare entries for same ncee_id
    const byYearFiles = fs.readdirSync(path.join(DATA_DIR, 'by-year')).filter(f => f.endsWith('.json'));
    const allFromYears: Record<string, any> = {};
    for (const f of byYearFiles) {
      const items = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'by-year', f), 'utf-8'));
      for (const item of items) {
        allFromYears[item.ncee_id] = item;
      }
    }

    const byKpDir = path.join(DATA_DIR, 'by-kp');
    if (!fs.existsSync(byKpDir)) return;
    const byKpFiles = fs.readdirSync(byKpDir).filter(f => f.endsWith('.json'));
    for (const f of byKpFiles) {
      const items = JSON.parse(fs.readFileSync(path.join(byKpDir, f), 'utf-8'));
      for (const item of items) {
        const fromYear = allFromYears[item.ncee_id];
        if (fromYear) {
          expect(JSON.stringify(item)).toBe(JSON.stringify(fromYear));
        }
      }
    }
  });
});
