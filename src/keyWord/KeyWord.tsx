//////ici on recupere juste les donnes json en local dans le ficher concerner et on le modifie en fonction du jour 
////il n y a rien vers une api exterieur 


import axios from 'axios'
import { useEffect, useState } from 'react'

import daysjs from "dayjs";
import { toast, Toaster } from 'sonner';


import KeyWordExplainButton from "../keyWordExplain/keyWordExplainButton";

import "./KeyWord.css";

function KeyWordData() {

    ////partie de use effect
    useEffect(() => {
        // recuperer le dernier jour enregistré dans le local storage
        const lastDay = localStorage.getItem('today');

        // recuperer le jour actuel
        const today = daysjs().format('YYYY-MM-DD');



        getEnglishData();


        // faire la comparaison
        if (lastDay === today) {
            toast('Un Nouveau Mots demain');
        } else {
            incrementDayIndex();

            localStorage.setItem('today', today);
        }

    }, [])


    // fonction pour incrementer le jour
    const incrementDayIndex = () => {


        const getDayIndex = Number(localStorage.getItem('dayIndex'));



        alert('incrementDayIndex different');
        setDayIndex(prev => {
            const newIndex = prev + 1;
            localStorage.setItem('dayIndex', String(newIndex));
            return newIndex;
        });





    }


    const [dayIndex, setDayIndex] = useState(() => {
        return Number(localStorage.getItem('dayIndex')) || 1;
    });

    const [userkeyWord, setUserkeyWord] = useState("");




    ////recupeer l index du jour
    // et l imbriquer dans le data du json
    const getEnglishData = async () => {
        const response = await axios.get('/dailyWords/dailyWordsData.json')

        const serverResponse = response.data[`day${dayIndex}`];


        // on met la reponse dans la constante de userkeyWord
        setUserkeyWord(serverResponse || "");


        // alert(JSON.stringify(serverResponse))
    }
    return (
        <div className='keywordContainer'>
            <Toaster />

            <h1 className='keywordText'
            >
                {userkeyWord}
            </h1>

            <KeyWordExplainButton userkeyWord={userkeyWord} />
        </div >
    )
}

export default KeyWordData