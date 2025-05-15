import { createContext, ReactNode, useState } from "react";

type CheckResponseContextType = {
    value: boolean;
    setValue: (value: boolean) => void;
}


const CheckResponseContext = createContext<CheckResponseContextType | undefined>(undefined)


export const CheckResponseContextProvider = ({ children }: { children: ReactNode }) => {

    const [value, setValue] = useState(false);

    return (
        <CheckResponseContext.Provider value={{ value, setValue }} >
            {children}
        </CheckResponseContext.Provider>
    );
};


