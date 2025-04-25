import { createContext, useState } from "react";

export type ServerResponseContextType = {
    serverResponse: string;
    setServerResponse: (value: string) => void;
}


export const ServerResponseContext = createContext<ServerResponseContextType>({
    serverResponse: "",
    setServerResponse: () => { },
})


type Props = {
    children: React.ReactNode;
}



export const ServerResponseProvider = ({ children }: Props) => {
    const [serverResponse, setServerResponse] = useState("");



    return (
        <ServerResponseContext.Provider value={{ serverResponse, setServerResponse }}>
            {children}
        </ServerResponseContext.Provider>



    )
}