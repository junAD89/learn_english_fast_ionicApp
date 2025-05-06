import { createContext, useEffect, useState } from "react";
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


    // useEffect(() => {
    //     // creation de date puis on le stocke dans le local storage

    //     const getDate = (localStorage.getItem("newDate"));

    //     if (!getDate) {
    //         console.log("NOt existe");

    //         //stockage de la date du jour meme au format iso  si il n  y a pas de date dans le local storage
    //         const newDate = localStorage.setItem("newDate", dayjs().toISOString());


    //     }

    //     const difference = dayjs(getDate).diff(dayjs(), 'day');
    //     // const difference = dayjs().diff(dayjs(getDate), 'day');


    //     // alert(difference)

    //     if (difference == 1) {
    //         console.log("Nouveau streak");
    //         incrementStreakNumber();
    //         localStorage.setItem("Number_Of_streak", String(streakNumber))
    //         localStorage.setItem("newDate", dayjs().toISOString());

    //     }
    //     else if (difference == 0) {
    //         alert("C est le meme jour");
    //     }

    //     else {
    //         setStreakNumber(0)
    //         localStorage.setItem("Number_Of_streak", String(streakNumber))

    //         console.log("Vous avez rate un jour");
    //         localStorage.setItem("newDate", dayjs().toISOString());
    //     }

    //     console.log(difference)
    //     // const lastDate = localStorage.getItem("newDate") || dayjs();

    //     // console.log("recuperation de la date  qui est :", lastDate)
    // }, [])

    const checkStreak = () => {

        const getDate = (localStorage.getItem("newDate"));

        if (!getDate) {
            console.log("NOt existe");

            //stockage de la date du jour meme au format iso  si il n  y a pas de date dans le local storage
            localStorage.setItem("newDate", dayjs().format('YYYY-MM-DD'));


        }

        // const difference = dayjs(getDate).diff(dayjs(), 'day');
        const difference = dayjs().diff(dayjs(getDate), 'day');


        alert(difference)

        if (difference == -1) {
            alert("Nouveau streak");
            incrementStreakNumber();
            localStorage.setItem("Number_Of_streak", String(streakNumber))

        }
        else if (difference == 0) {
            alert("C est le meme jour");
        }

        else {
            setStreakNumber(0)
            localStorage.setItem("Number_Of_streak", String(streakNumber))

            alert("Vous avez rate un jour");
        }

        console.log(difference)
    }

    return (
        <StreakContext.Provider value={{ streakNumber, setStreakNumber, incrementStreakNumber, decrementStreakNumber, checkStreak }}>
            {children}
        </StreakContext.Provider>
    );
};
