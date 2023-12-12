import {
    configurePersistable,
    getPersistedStore,
    makePersistable,
    stopPersisting,
  } from "mobx-persist-store";
  
  import { makeAutoObservable } from "mobx";
  import { appState, layoutMode } from "@/types";
import { projectType } from "@/types/projects";
  
  class ProjectsStore {
    Projects: projectType[] = []
  
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
        name: "projectsStore",
        properties: [],
      });
    }
  
    setAllProjects(val: projectType[]) {
      this.Projects = val;
    }
  
    async getStoredData() {
      return await getPersistedStore(this);
    }
  
    stopStore() {
      stopPersisting(this);
    }
  }
  
  export const projectsStore = new ProjectsStore();
  