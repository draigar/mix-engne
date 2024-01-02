export interface userType {
    id: number,
    username: string,
    email: string,
    role: number,
    status: number,
    profile: profileType,
    createdAt: string,
    updatedAt: string,
}

export interface profileType {
    first_name: string;
    last_name: string;
    gender: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface updateProfile {
    first_name: string;
    last_name: string;
    gender: string;
}