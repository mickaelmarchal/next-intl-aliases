import { useContext } from "react";
import { LocaleAliasContext } from "../shared/LocaleAliasProvider";

export function useLocaleAlias() {
  return useContext(LocaleAliasContext);
}
