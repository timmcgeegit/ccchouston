import { z } from 'zod';

export const sermonSchema = z.object({
  sermonid: z.bigint().positive().optional(),
  created_at: z.instanceof(Date).optional(),
  sermon_title: z.string().min(1).optional(),
  sermon_description: z.string().min(1).optional(),
  sermon_date: z.string().optional(),
  sermon_pdf: z.string().optional(),
  sermon_notes: z.string().optional(),
  sermon_transcript: z.string().optional(),
  sermon_audio: z.string().optional(),
  sermon_video: z.string().optional(),
  sermon_series: z.string().optional(),
  sermon_graphic: z.string().optional(),
  sermon_teacher: z.string().optional(),
});

