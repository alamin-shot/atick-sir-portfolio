"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/store/store";
import type { StoreProviderProps } from "@/types/components/layout";

// One store per request on the server and one per tab in the browser.
export function StoreProvider({ children }: StoreProviderProps) {
  const [store] = useState(makeStore);

  return <Provider store={store}>{children}</Provider>;
}
