import { createContext, useState } from "react";

export type AgeType = {
    userAge: number,
    setUserAge: (value: number) => void,
    incrementAge: () => void,
    decrementAge: () => void,
}


export const AgeContext = createContext<AgeType>({
    userAge: 0,
    setUserAge: (value: number) => { },
    incrementAge: () => { },
    decrementAge: () => { },
})


type Props = {
    children: React.ReactNode
}



export const AgeContextProvider = ({ children }: Props) => {
    const [userAge, setUserAge] = useState(2);

    const incrementAge = () => {
        setUserAge(prev => {
            const newAge = prev + 1;

            return newAge;
        })
    }
    const decrementAge = () => {
        setUserAge(prev => {
            const newAge = prev + 1;

            return newAge;
        })
    }

    return (
        <AgeContext.Provider value={{ userAge, setUserAge, incrementAge, decrementAge }}>
            {children}
        </AgeContext.Provider>
    )
}