import type {
  getLocaleAlias as getLocaleAlias_type,
  unstable_setRequestLocaleAlias as unstable_setRequestLocaleAlias_type,
} from "../react-server";

/**
 * Allows to import `next-intl/server` in non-RSC environments.
 *
 * This is mostly relevant for testing, since e.g. a `generateMetadata`
 * export from a page might use `next-intl/server`, but the test
 * only uses the default export for a page.
 */

function notSupported(message: string) {
  return () => {
    throw new Error(`\`${message}\` is not supported in Client Components.`);
  };
}

export const getLocale = notSupported(
  "getLocale"
) as typeof getLocaleAlias_type;

export const unstable_setRequestLocale = notSupported(
  "unstable_setRequestLocale"
) as typeof unstable_setRequestLocaleAlias_type;
