export interface AuthData {
    access_token: string;
}

export interface authType {
    auth: AuthData;
    user: UserDataType;
}

export interface UserDataType {
    first_name: string;
    last_name: string;
    email: string;
    role: number;
    phone_number: string;
    username: string;
    image: string;
}
