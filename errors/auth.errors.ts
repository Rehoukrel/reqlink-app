export const AuthErrors = {
    InvalidCredentials: "Auth.Invalid_Credentials",
    DuplicateCredentials: "Auth.Duplicate_Credentials",
    Unauthorized: "Auth.Unauthorized",
    Forbidden: "Auth.Forbidden",
} as const;

export type AuthErrors = typeof AuthErrors[keyof typeof AuthErrors];