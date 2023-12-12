import { apiResponse } from '@/types';
import { config } from './../store/config/index';
import { http } from "@/config"
import { createProject, projectType } from "@/types/projects"
import { useState } from "react"
import { useMutation, useQuery } from "react-query"

export type projectConfig = {
    enableFetchProjects?: boolean;
};

export const useProjects = (config?: projectConfig) => {

    const [projectsData, setProjectsData] = useState<projectType[]>([])

    const createProject = useMutation(async (data: createProject) => {
        try {
            const req: any = await http.post('projects/create', data)
            return req.data;
        } catch (error) {
            throw error;
        }
    })

    const fetchAllProjects = useQuery(['fetchAllProjects'], async () => {
        try {
            const req: any = await http.get('projects/all')
            return req.data;
        } catch (error) {
            throw error;
        }
    }, {
        enabled: Boolean(config?.enableFetchProjects),
        onSuccess: (val: apiResponse) => {
            if (val.status) {
                const res: any = val.data;
                setProjectsData(res)
            }
        }
    })

    return {
        createProject,
        fetchAllProjects,
        projectsData,
    }
}