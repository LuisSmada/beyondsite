"use client";
import { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";

interface IStoreProvider {
  children: ReactNode;
}

export default function StoreProvider({ children }: IStoreProvider) {
  const [store] = useState<AppStore>(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
}
