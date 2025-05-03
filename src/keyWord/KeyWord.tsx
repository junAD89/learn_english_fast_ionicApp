//////ici on recupere juste les donnes json en local dans le ficher concerner et on le modifie en fonction du jour 
////il n y a rien vers une api exterieur 
import Lottie from "lottie-react";
import click from "../assets/lottieAnimations/click.json";


import axios from 'axios'
import { useEffect, useState } from 'react'

import daysjs from "dayjs";
import { toast, Toaster } from 'sonner';



import "./KeyWord.css";
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';

function KeyWordData() {

    const history = useHistory();


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



        setDayIndex(prev => {
            const newIndex = prev + 1;
            localStorage.setItem('dayIndex', String(newIndex));
            return newIndex;
        });





    }


    const [dayIndex, setDayIndex] = useState(() => {
        return Number(localStorage.getItem('dayIndex')) || 1;
    });


    // use state pour recuperer le mot et la data correspondante de la journee actuel
    const [userkeyWord, setUserkeyWord] = useState("");
    const [significationOfKeyWord, setSignificationOfKeyWord] = useState("");



    ////recupeer l index du jour
    // et l imbriquer dans le data du json
    const getEnglishData = async () => {
        const response = await axios.get('/dailyWords/dailyWordsData.json')

        const serverResponse = response.data[`day${dayIndex}`];

        const { word, signification } = serverResponse;
        // on met la reponse dans la constante de userkeyWord


        setUserkeyWord(word || "");
        setSignificationOfKeyWord(signification || "");


    }

    const navToCourses = () => {
        history.push("/courses/123");
    }
    return (
        <div className='keywordContainer'>

            <Toaster />



            <div className='keywordText'
            >

                <h3>
                    🧠 Le mot du jour est :
                </h3>
                <h1>
                    {userkeyWord}

                </h1>

                <p>
                    {significationOfKeyWord}
                </p>
            </div>
            <div className='showcase_container'>
                <motion.div

                    className='showcase_button'
                    whileTap={{ scale: 0.9 }}


                >


                    {/* <BadgeInfo size={30} /> */}
                    <motion.button
                        animate={{ padding: 10, scale: 1.2 }}
                        transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
                        className="startLesson_button"
                        onClick={() => {
                            navToCourses();
                        }}
                    >
                        Commencer la partie
                    </motion.button>

                </motion.div>




            </div >

        </div >
    )
}

export default KeyWordData