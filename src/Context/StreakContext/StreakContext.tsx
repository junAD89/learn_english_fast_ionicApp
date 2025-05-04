import { createContext, useEffect, useState } from "react"

import dayjs from "dayjs";


export type StreakContextType = {
    streakNumber: number,
    setStreakNumber: (value: number) => void,
    incrementStreakNumber: () => void,
    decrementStreakNumber: () => void,
}


export type DaysContextType = {
    days: number,
    setDays: (value: number) => void,
    incrementDays: () => void,
}

export const DaysContext = createContext<DaysContextType>({
    days: 0,
    setDays: (value: number) => { },
    incrementDays: () => { },
})

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


    const [streakNumber, setStreakNumber] = useState(() => {
        const getStreakNumber_localStorage = Number(localStorage.getItem("streakNumber"));
        return getStreakNumber_localStorage || 0;

    });

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


    const [days, setDays] = useState(() => {
        const getDays_localStorage = Number(localStorage.getItem("days"));
        return getDays_localStorage || 0;

    });
    useEffect(() => {
        const nowDate = dayjs();

        const lastDate = localStorage.getItem("streakDate");

        const difference = nowDate.diff(Number(lastDate), "day");

        if (difference > 1) {
            incrementStreakNumber();
            localStorage.setItem("streakDate", nowDate.toString());

            localStorage.setItem("streakNumber", streakNumber.toString());


        } else {
            setStreakNumber(0);

            localStorage.setItem("streakNumber", "0");

        }
    }, [])

    return (
        <StreakContext.Provider value={{ streakNumber, setStreakNumber, incrementStreakNumber, decrementStreakNumber }} >
            {children}
        </StreakContext.Provider>
    )
}