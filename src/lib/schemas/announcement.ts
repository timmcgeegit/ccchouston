// ccchouston/src/lib/schemas/announcement.ts
import { z } from 'zod';

export const announcementSchema = z.object({
  id: z.number().int().positive().optional(),
  title: z.string().min(1).optional(),
  img_square: z.string().optional(),
  img_16x9: z.string().optional(),
  description: z.string().min(1).optional(),
  featured: z.boolean().optional(),
  category: z.string().optional(),
  link: z.string().optional(),
});