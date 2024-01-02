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
export interface errorResponse {
    message: string;
    name: string;
    config: errorResponseConfig,
    code: string;
    status: number;
    response: errorResponseResponse
}

export interface errorResponseConfig {
    method: string;
    url: string;
    data: {};
    headers: {
        Accept: string;
        "Content-Type": string;
        "Cache-Control": string;
        "Access-Control-Allow-Origin": string;
        "Pragma": string,
        Authorization: string;
        options: {}
    }
}

export interface errorResponseResponse {
    data: {
        message: any;
        error: string;
        statusCode: number;
    };
    status: number;
    statusText: string;
    headers: {};

}