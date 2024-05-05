"use client";

import React, { useMemo } from "react";
import { PropsWithChildren, createContext } from "react";

export interface Props extends PropsWithChildren {
  localeAlias: string;
}

export const LocaleAliasContext = createContext<string>("");

export function LocaleAliasProvider({ localeAlias, children }: Props) {
  const value = useMemo(() => localeAlias, [localeAlias]);

  return (
    <LocaleAliasContext.Provider value={value}>
      {children}
    </LocaleAliasContext.Provider>
  );
}
