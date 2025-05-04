import { createContext, useState } from "react"



export type StreakContextType = {
    streakNumber: number,
    setStreakNumber: (value: number) => void,
    incrementStreakNumber: () => void,
    decrementStreakNumber: () => void,
}

export const StreakContext = createContext<StreakContextType>({
    streakNumber: 0,
    setStreakNumber: (value: number) => { },
    incrementStreakNumber: () => { },
    decrementStreakNumber: () => { },
})


type Props = {
    children: React.ReactNode
}

export const StreakContextProvider = ({ children }: Props) => {
    const [streakNumber, setStreakNumber] = useState(0);

    const incrementStreakNumber = () => {

        setStreakNumber(prev => {
            const newStreakNumber = prev + 1;

            return newStreakNumber;
        })
    }

    const decrementStreakNumber = () => {
        setStreakNumber(prev => {
            const newStreakNumber = prev - 1;

            return newStreakNumber;
        })
    }

    return (
        <StreakContext.Provider value={{ streakNumber, setStreakNumber, incrementStreakNumber, decrementStreakNumber }} >
            {children}
        </StreakContext.Provider>
    )
}