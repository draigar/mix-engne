import { userType } from ".";
import { servicesType } from "./serviceTypes";

export interface projectType {
    id: number;
    title: string,
    artist_name: string,
    note: string,
    link: string,
    services: servicesType[],
    engineer: userType,
    status: number,
    startDate: string,
    endDate: string,
    createdAt: string,
    updatedAt: string
}

export interface createProject {
    title: string;
    artist_name: string;
    note: string;
    link: string;
    serviceIds: [];
    startDate: Date;
    endDate: Date;
    engineerId?: number;
}