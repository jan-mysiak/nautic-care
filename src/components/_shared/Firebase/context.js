import React from 'react';
import FirebaseHandler from './handler';

const FirebaseContext = React.createContext(null);

export default function FirebaseContextProvider({ children }) {
    return (
        <FirebaseContext.Provider value={new FirebaseHandler()}>
            {children}
        </FirebaseContext.Provider>
    )
}

export function useFirebaseContext() {
    const context = React.useContext(FirebaseContext);

    if (!context) {
        throw new Error("Context not found");
    }

    return context;
}