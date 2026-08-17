// Mock for astro:content virtual module (only available during Astro build)
// In tests, we use zod directly for schema validation
import { z } from 'zod';

function defineCollection(config: any) {
  return config;
}

export { z, defineCollection };
