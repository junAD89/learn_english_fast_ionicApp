import { createContext, ReactNode, useState } from "react";


export type FinishLessonStateContextType = {

    chapiter1lesson1: boolean;
    chapiter1lesson2: boolean;
    chapiter1lesson3: boolean;
    chapiter1lesson4: boolean;
    chapiter1lesson5: boolean;


    setFinishChapiter1lesson1: (value: boolean) => void;
    setFinishChapiter1lesson2: (value: boolean) => void;
    setFinishChapiter1lesson3: (value: boolean) => void;
    setFinishChapiter1lesson4: (value: boolean) => void;
    setFinishChapiter1lesson5: (value: boolean) => void;
}


export const FinishLessonStateContext = createContext<FinishLessonStateContextType>({

    chapiter1lesson1: false,
    chapiter1lesson2: false,
    chapiter1lesson3: false,
    chapiter1lesson4: false,
    chapiter1lesson5: false,
    setFinishChapiter1lesson1: () => { },
    setFinishChapiter1lesson2: () => { },
    setFinishChapiter1lesson3: () => { },
    setFinishChapiter1lesson4: () => { },
    setFinishChapiter1lesson5: () => { },

})



export const FinishLessonStateContextProvider = ({ children }: { children: ReactNode }) => {

    const [chapiter1lesson1, setFinishChapiter1lesson1] = useState<boolean>(() => {
        const stored = localStorage.getItem("chapiter1lesson1");
        return stored ? JSON.parse(stored) : false;
    })


    const [chapiter1lesson2, setFinishChapiter1lesson2] = useState<boolean>(() => {
        const stored = localStorage.getItem("chapiter1lesson2");
        return stored ? JSON.parse(stored) : false;
    });

    const [chapiter1lesson3, setFinishChapiter1lesson3] = useState<boolean>(() => {
        const stored = localStorage.getItem("chapiter1lesson3");
        return stored ? JSON.parse(stored) : false;
    });

    const [chapiter1lesson4, setFinishChapiter1lesson4] = useState<boolean>(() => {
        const stored = localStorage.getItem("chapiter1lesson4");
        return stored ? JSON.parse(stored) : false;
    });

    const [chapiter1lesson5, setFinishChapiter1lesson5] = useState<boolean>(() => {
        const stored = localStorage.getItem("chapiter1lesson5");
        return stored ? JSON.parse(stored) : false;
    });



    return (
        <FinishLessonStateContext.Provider value={{ chapiter1lesson1, chapiter1lesson2, chapiter1lesson3, chapiter1lesson4, chapiter1lesson5, setFinishChapiter1lesson1, setFinishChapiter1lesson2, setFinishChapiter1lesson3, setFinishChapiter1lesson4, setFinishChapiter1lesson5 }}>
            {children}
        </FinishLessonStateContext.Provider>
    )
}


/////on peut maintenant par exple faire un if
// chapiter1lesson1 = true  et afficher le cours ou pas 