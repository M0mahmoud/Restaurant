type ApiSuccessResponse<T> = {
    status: "success";
    data: T;
};

type ApiFailResponse = {
    status: "fail" | "error";
    data: {
        msg: string;
    };
};

type ApiResponse<T> = ApiSuccessResponse<T> | ApiFailResponse;

export async function fetchFromApi<T>(
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body?: object,
    headers: Record<string, string> = {},
): Promise<ApiResponse<T>> {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`;
        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.API_KEY}`,
                ...headers,
            },
            body: body ? JSON.stringify({ ...body }) : undefined,
        });

        const result: ApiResponse<T> = await response.json();
        if (result.status === "fail") {
            return result;
        }
        return result;
    } catch (error) {
        console.error("API request error:", error);
        throw error;
    }
}
