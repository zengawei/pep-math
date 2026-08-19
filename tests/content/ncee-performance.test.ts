import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.resolve(__dirname, '../../public/data/ncee');

describe('NCEE performance', () => {
  it('单个分片 JSON 文件 < 200KB（未压缩）', () => {
    if (!fs.existsSync(DATA_DIR)) return;

    function checkDir(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          checkDir(full);
        } else if (entry.name.endsWith('.json')) {
          const stat = fs.statSync(full);
          expect(
            stat.size,
            `${path.relative(DATA_DIR, full)}: ${stat.size} bytes exceeds 200KB`
          ).toBeLessThan(200 * 1024);
        }
      }
    }
    checkDir(DATA_DIR);
  });

  it('索引 JSON 不包含题目正文或解答', () => {
    if (!fs.existsSync(DATA_DIR)) return;

    const byYearDir = path.join(DATA_DIR, 'by-year');
    if (!fs.existsSync(byYearDir)) return;

    const files = fs.readdirSync(byYearDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      const items = JSON.parse(fs.readFileSync(path.join(byYearDir, f), 'utf-8'));
      for (const item of items) {
        expect(item).not.toHaveProperty('body');
        expect(item).not.toHaveProperty('content');
        expect(item).not.toHaveProperty('solution');
      }
    }
  });

  it('所有分片 JSON 可正常 JSON.parse()（无截断）', () => {
    if (!fs.existsSync(DATA_DIR)) return;

    function checkDir(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          checkDir(full);
        } else if (entry.name.endsWith('.json')) {
          const content = fs.readFileSync(full, 'utf-8');
          expect(() => JSON.parse(content), `${path.relative(DATA_DIR, full)}: parse error`).not.toThrow();
        }
      }
    }
    checkDir(DATA_DIR);
  });
});
