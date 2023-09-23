import { toastWarning } from "./my-toast";

export function handleApiError(error: Error): void {
    try {
        let errorData;
        try {
            errorData = JSON.parse(error.message);
        } catch (parseError) {
            // Treat error.message as a plain error message
            // console.log("Error message:", error.message);
            toastWarning(error.message);
            return;
        }

        if ( typeof errorData === "object" && errorData !== null && "fieldErrors" in errorData ) {
            const fieldErrors = errorData.fieldErrors as Record<string, string[]>;
            Object.keys(fieldErrors).forEach((fieldName) => {
                const validationMessages = fieldErrors[fieldName];
                if (validationMessages.length > 0) {
                    const firstValidationMessage = validationMessages[0];
                    toastWarning(firstValidationMessage);
                    // console.log(
                    //   `Validation error for ${fieldName}:`,
                    //   firstValidationMessage
                    // );
                }
            });
        }
    } catch (error: any) {
        // console.log("Original error message:", error);
        toastWarning(error);
    }
}

export const rupiahFormat = (num : number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(num)
};