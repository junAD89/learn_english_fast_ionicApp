import React, { createContext, useState } from 'react'



export type DiamonContextType = {
    diamondNumber: number,
    setDiamondNumber: (value: number) => void,
    incrementDiamonNumber: () => void,
    decrementDiamonNumber: () => void,
}


export const DiamonContext = createContext<DiamonContextType>({
    diamondNumber: 0,
    setDiamondNumber: (value: number) => { },
    incrementDiamonNumber: () => { },
    decrementDiamonNumber: () => { },
})


type Props = {
    children: React.ReactNode
}

export const DiamonContextProvider = ({ children }: Props) => {
    const [diamondNumber, setDiamondNumber] = useState(3);


    const incrementDiamonNumber = () => {
        setDiamondNumber(prev => {
            const newNumber = prev + 1;

            return newNumber;
        })
    };

    const decrementDiamonNumber = () => {
        setDiamondNumber(prev => {
            const newNumber = prev - 1;
            return newNumber;
        })
    }




    return (
        <DiamonContext.Provider value={{ diamondNumber, setDiamondNumber, incrementDiamonNumber, decrementDiamonNumber }}>
            {children}
        </DiamonContext.Provider>
    )
}