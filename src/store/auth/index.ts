import { AuthData, UserDataType } from "@/types";
import { makeAutoObservable } from "mobx";
import { clearPersistedStore, configurePersistable, makePersistable } from "mobx-persist-store";

class AuthStore {
  auth: Partial<AuthData> = {};
  user: Partial<UserDataType> = {};
  isLoggedIn: Boolean = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    configurePersistable(
      {
        storage:
          typeof window !== "undefined" ? window.localStorage : undefined, // sessionStorage
        expireIn: 31557600000,
        removeOnExpiration: true,
        stringify: true,
        debugMode: false,
      },
      { delay: 2, fireImmediately: true }
    );

    makePersistable(this, {
      name: "AuthStore",
      properties: ["auth", "user", "isLoggedIn"],
    });
  }

  setAuth(dt: AuthData) {
    this.auth = dt;
    this.isLoggedIn = true;
  }
  setUser(dt: UserDataType) {
    this.user = dt;
  }

  logout() {
    this.auth = {};
    this.user = {};
    this.isLoggedIn = false;
    return new Promise<any>((resolve: any) => {
      resolve(true);
    });
  }

  async clearStoredData() {
    await clearPersistedStore(this);
  }

}

export const authStore = new AuthStore();