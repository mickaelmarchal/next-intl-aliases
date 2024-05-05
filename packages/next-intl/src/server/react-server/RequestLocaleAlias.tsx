import { cache } from "react";

// Workaround until `createServerContext` is available
function getCacheImpl() {
  const value: { localeAlias?: string } = { localeAlias: undefined };
  return value;
}
const getCache = cache(getCacheImpl);

export default function setRequestLocaleAlias(localeAlias: string) {
  getCache().localeAlias = localeAlias;
}

export function getRequestLocaleAlias(): string {
  return getCache().localeAlias || "";
}
