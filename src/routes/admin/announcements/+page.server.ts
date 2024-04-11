// src/routes/admin/announcements/+page.server.ts
import type { PageServerLoad } from "./$types";
import announcements from "../../../content/announcements/announcements.json";

export const load: PageServerLoad = async () => {
  return {
    announcements,
  };
};