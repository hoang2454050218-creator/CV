import type { Locale } from "@/i18n/config";
import type { Content } from "./types";
import { en } from "./en";
import { vi } from "./vi";

const dictionaries: Record<Locale, Content> = { en, vi };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export type { Content } from "./types";
