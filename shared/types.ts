export type UsecaseResult<TData = unknown, TError extends keyof Record<string, string> | string = string> = {
    data: TData;
    error?: never;
} | {
    data?: never;
    error: TError;
}