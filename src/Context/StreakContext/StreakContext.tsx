import { createContext, useState } from "react";
import dayjs from "dayjs";

export type StreakContextType = {
    streakNumber: number;
    setStreakNumber: (value: number) => void;
    incrementStreakNumber: () => void;
    decrementStreakNumber: () => void;
    checkStreak: () => void;
};

export const StreakContext = createContext<StreakContextType>({
    streakNumber: 0,
    setStreakNumber: (value: number) => { },
    incrementStreakNumber: () => { },
    decrementStreakNumber: () => { },
    checkStreak: () => { }
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
        setStreakNumber(prev => {
            const newStreak = prev + 1;

            return newStreak;
        })
    }
    const decrementStreakNumber = () => {
        setStreakNumber(prev => {
            const newStreak = prev + 1;

            return newStreak;
        })
    }


    const checkStreak = () => {
        const getDate = localStorage.getItem("newDate");

        if (!getDate) {
            console.log("NOt existe");
            localStorage.setItem("newDate", dayjs().format('YYYY-MM-DD'));
            return;
        }

        // Calculer la différence en jours entre aujourd'hui et la dernière date enregistrée
        const lastDate = dayjs(getDate);
        const today = dayjs().startOf('day');
        const difference = lastDate.diff(today, 'day');

        if (difference === 1) {
            alert("Nouveau streak");
            incrementStreakNumber();
            localStorage.setItem("newDate", today.format('YYYY-MM-DD'));
        }
        else if (difference === 0) {
            alert("C'est le même jour");
        }
        else {
            setStreakNumber(0);
            localStorage.setItem("newDate", today.format('YYYY-MM-DD'));
            alert("Vous avez raté un jour");
        }

        console.log("Différence en jours:", difference);
    }

    return (
        <StreakContext.Provider value={{ streakNumber, setStreakNumber, incrementStreakNumber, decrementStreakNumber, checkStreak }}>
            {children}
        </StreakContext.Provider>
    );
};
