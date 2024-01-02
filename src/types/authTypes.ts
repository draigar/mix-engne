export interface AuthData {
    access_token: string;
}

export interface authType {
    auth: AuthData;
    user: UserDataType;
}

export interface UserDataType {
    id: number;
    email: string;
    role: number;
    username: string;
    profile: ProfileType;
}

export interface ProfileType {
    first_name: string;
    last_name: string;
    gender: string;
}