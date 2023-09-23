export type GlobalResponse <T> = {
    code: number;
    message: string;
    data: T;
    error: Object;
    validations: Object;
}