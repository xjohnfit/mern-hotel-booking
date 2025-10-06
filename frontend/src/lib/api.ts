export const verifyToken = async (): Promise<boolean> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/validate-token`, {
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error("Token invalid");
        }

        return response.json();
    } catch (error) {
        console.log('Error validating token:', error);
        return false;
    }
};
