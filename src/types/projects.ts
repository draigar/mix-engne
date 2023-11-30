import { servicesType } from "./serviceTypes";

export interface projectType {
    id: number;
    title: string,
    artist_name: string,
    note: string,
    link: string,
    servicesId: servicesType[],
    status: number,
    startDate: string,
    endDate: string,
    createdAt: string,
    updatedAt: string
}