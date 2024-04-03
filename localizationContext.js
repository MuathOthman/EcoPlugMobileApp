import React, { createContext, useContext } from 'react';
import i18next from 'i18next';

const LocalizationContext = createContext();
export const LocalizationProvider = ({ children }) => {
    return (
        <LocalizationContext.Provider value={i18next}>
            {children}
        </LocalizationContext.Provider>
    );
}

export const useTranslation = () => useContext(LocalizationProvider);