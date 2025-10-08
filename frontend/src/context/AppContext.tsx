import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { verifyToken, logout } from '../lib/api';

type toastMessage = {
    message: string;
    type: 'success' | 'error' | 'info';
};

type AppContextType = {
    showToast: (toastMessage: toastMessage) => void;
    verifyToken: () => Promise<boolean>;
    logout: () => Promise<void>;
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AppContext.Provider
            value={{
                showToast: (toastMessage) =>
                    toast(toastMessage.message, { type: toastMessage.type }),
                verifyToken,
                logout,
                isLoggedIn,
                setIsLoggedIn,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context!;
};
