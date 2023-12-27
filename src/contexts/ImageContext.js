/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

const ImageContextProvider = ({ children }) => {
    const [selectedImages, setSelectedImages] = useState([]);

    return (
        <ImageContext.Provider value={{ selectedImages, setSelectedImages }}>
            {children}
        </ImageContext.Provider>
    );
};

const useImageContext = () => {
    const context = useContext(ImageContext);
    if (!context) {
        throw new Error('useImageContext must be used within an ImageContextProvider');
    }
    return context;
};

export { ImageContextProvider, useImageContext };
