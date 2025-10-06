import { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import { verifyToken } from '../lib/api';

type toastMessage = {
    message: string;
    type: 'success' | 'error' | 'info';
};

type AppContextType = {
    showToast: (toastMessage: toastMessage) => void;
    verifyToken: () => Promise<boolean>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    return (
        <AppContext.Provider
            value={{
                showToast: (toastMessage) =>
                    toast(toastMessage.message, { type: toastMessage.type }),
                verifyToken
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context!;
};
