import { createContext, ReactNode, useState } from "react";


export type FinishLessonStateContextType = {

    chapiter1lesson1: boolean;
    chapiter1lesson2: boolean;
    chapiter1lesson3: boolean;
    chapiter1lesson4: boolean;
    chapiter1lesson5: boolean;


    setFinishChapiter1lesson1: (value: boolean) => void;
}


export const FinishLessonStateContext = createContext<FinishLessonStateContextType>({

    chapiter1lesson1: false,
    chapiter1lesson2: false,
    chapiter1lesson3: false,
    chapiter1lesson4: false,
    chapiter1lesson5: false,
    setFinishChapiter1lesson1: () => { },
})



export const FinishLessonStateContextProvider = ({ children }: { children: ReactNode }) => {
    const [chapiter1lesson1, setFinishChapiter1lesson1] = useState(false)


    let chapiter1lesson2 = false;
    let chapiter1lesson3 = false;
    let chapiter1lesson4 = false;
    let chapiter1lesson5 = false;


    return (
        <FinishLessonStateContext.Provider value={{ chapiter1lesson1, chapiter1lesson2, chapiter1lesson3, chapiter1lesson4, chapiter1lesson5, setFinishChapiter1lesson1 }}>
            {children}
        </FinishLessonStateContext.Provider>
    )
}