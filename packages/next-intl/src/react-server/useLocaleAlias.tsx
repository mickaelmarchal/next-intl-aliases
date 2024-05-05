import type { useLocaleAlias as useLocaleAliasType } from "../react-client";
import { getRequestLocaleAlias } from "../server/react-server/RequestLocaleAlias";

export default function useLocaleAlias(
  // eslint-disable-next-line no-empty-pattern
  ...[]: Parameters<typeof useLocaleAliasType>
): ReturnType<typeof useLocaleAliasType> {
  return getRequestLocaleAlias();
}
