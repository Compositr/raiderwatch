import { z } from "zod";

export const snowflake = z.string().refine((s) => /^[0-9]{7,}$/.test(s), {})
