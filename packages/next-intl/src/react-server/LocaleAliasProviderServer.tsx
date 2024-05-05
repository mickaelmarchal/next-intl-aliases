import React, { ComponentProps } from "react";
import { getLocaleAlias } from "../server.react-server";
import { LocaleAliasProvider as BaseLocaleAliasProvider } from "../shared/LocaleAliasProvider";

type Props = ComponentProps<typeof BaseLocaleAliasProvider>;

export default async function LocaleAliasProviderServer({
  localeAlias,
}: Props) {
  return (
    <BaseLocaleAliasProvider
      localeAlias={localeAlias ?? (await getLocaleAlias())}
    />
  );
}
