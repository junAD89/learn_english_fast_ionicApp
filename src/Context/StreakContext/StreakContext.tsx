import { createContext, useEffect, useState } from "react";
import dayjs from "dayjs";

export type StreakContextType = {
    streakNumber: number;
    setStreakNumber: (value: number) => void;
    incrementStreakNumber: () => void;
    decrementStreakNumber: () => void;
};

export const StreakContext = createContext<StreakContextType>({
    streakNumber: 0,
    setStreakNumber: (value: number) => { },
    incrementStreakNumber: () => { },
    decrementStreakNumber: () => { },
});

type Props = {
    children: React.ReactNode;
};

export const StreakContextProvider = ({ children }: Props) => {
    const [streakNumber, setStreakNumber] = useState(() => {
        const getStreakNumber_localStorage = Number(localStorage.getItem("Number_Of_streak"));
        return getStreakNumber_localStorage || 0;
    });

    const incrementStreakNumber = () => {
        setStreakNumber((prev) => prev + 1);
    };

    const decrementStreakNumber = () => {
        setStreakNumber((prev) => prev - 1);
    };

    useEffect(() => {
        const nowDate = dayjs();
        const lastDate = localStorage.getItem("streakDate");

        console.log("lastDate", lastDate);
        console.log("new date", nowDate);

        if (lastDate) {
            const lastDateParsed = dayjs(lastDate);
            if (lastDateParsed.isValid()) {
                const difference = nowDate.diff(lastDateParsed, "day");
                console.log("difference", difference);

                if (difference > 1) {
                    // Incrémente le streak uniquement une fois
                    const newStreakNumber = streakNumber + 1;
                    localStorage.setItem("streakDate", nowDate.toString());
                    localStorage.setItem("Number_Of_streak", newStreakNumber.toString());
                    setStreakNumber(newStreakNumber);
                } else if (difference === 1) {
                    // Récupère le streak actuel sans changer
                    localStorage.setItem("streakDate", nowDate.toString());
                    localStorage.setItem("Number_Of_streak", streakNumber.toString());
                } else {
                    setStreakNumber(0);
                    localStorage.setItem("Number_Of_streak", "1");
                }
            } else {
                console.log("Invalid lastDate format");
            }
        } else {
            console.log("No lastDate in localStorage");
            localStorage.setItem("streakDate", nowDate.toString());
            localStorage.setItem("Number_Of_streak", "1");
        }
    }, []);
    // Le tableau des dépendances est vide pour que l'effet s'exécute une seule fois au démarrage

    return (
        <StreakContext.Provider value={{ streakNumber, setStreakNumber, incrementStreakNumber, decrementStreakNumber }}>
            {children}
        </StreakContext.Provider>
    );
};
