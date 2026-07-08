import { notFound } from "next/navigation";

/** Catch-all: any unmatched path under /en or /vi renders the 404 page. */
export default function CatchAll() {
  notFound();
}
