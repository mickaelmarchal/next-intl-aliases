/**
 * This is the main entry file when non-'react-server'
 * environments import.
 *
 * Maintainer notes:
 * - Make sure this mirrors the API from 'react-server'.
 * - Make sure everything exported from this module is
 *   supported in all Next.js versions that are supported.
 */

// Replace `useLocale` export from `use-intl`
export { useLocaleAlias } from "./useLocaleAlias";
export { LocaleAliasProvider } from "../shared/LocaleAliasProvider";
