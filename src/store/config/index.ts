import {
  configurePersistable,
  getPersistedStore,
  makePersistable,
  stopPersisting,
} from "mobx-persist-store";

import { makeAutoObservable } from "mobx";
import { appState, layoutMode } from "@/types";

class Store {
  AppName: string = "Mix Engne";
  AppDescription: string = "Mix Engne";
  AppVersion: string = "1.0.0";
  sidebarOpen: boolean = false;

  appState: Partial<appState> = {
    searchHide: true,
    activeSearch: false,
    collapsed: false,
    hide: true,
  };
  layoutMode: Partial<layoutMode> = {
    darkMode: false,
    rtl: false,
    topMenu: false,
  }

  constructor() {
    makeAutoObservable(this);
    configurePersistable(
      {
        storage:
          typeof window !== "undefined" ? window.localStorage : undefined,
        expireIn: 604800000,
        removeOnExpiration: true,
        stringify: true,
        debugMode: false,
      },
      { delay: 200, fireImmediately: false }
    );
    makePersistable(this, {
      name: "config",
      properties: ['appState', 'layoutMode'],
    });
  }

  async getConfigData() {
    return this.sidebarOpen
  }

  async getStoredData() {
    return await getPersistedStore(this);
  }

  stopStore() {
    stopPersisting(this);
  }
}

export const config = new Store();
