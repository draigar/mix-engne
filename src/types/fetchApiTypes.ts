export interface optionsAxios {
    isGeneric?: boolean;
    headers?: {}
}

export interface optionsFetch {
    isGeneric?: boolean;
    headers?: {},
    revalidate?: number,
}

export interface apiResponse {
    data: {};
    message: string;
    status: boolean;
    statusCode: number;
    statusMessage: string;
}