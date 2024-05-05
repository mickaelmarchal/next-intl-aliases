import { getRequestLocaleAlias } from "./RequestLocaleAlias";

export default function getLocaleAlias() {
  return Promise.resolve(getRequestLocaleAlias());
}
