import { IonContent, IonPage } from '@ionic/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Swiper } from "swiper";
import { SwiperSlide } from 'swiper/react';

export default function QuestionFinal() {

    const [questionTitle, setQuestionTitle] = useState("");

    const getData = async () => {
        const response = await axios.get("FinalChapiter/FinalChapiter.json")

        const data = response.data;

        // alert(data.length)

        let questionIndex = 0;///il s agit de l'index pour recupere l'objet des questionnaires 
        ///ca commence par 0 ,1 ,2



        const questionObj = data[questionIndex]//// const pour recupere la question 


        console.log("Voici la question " + JSON.stringify(questionObj))

        const { question } = questionObj;


        setQuestionTitle(question)
        console.log("Voici la question" + JSON.stringify(question))


        // [questionWord]
        // const reponse1 = data[index][key];


        console.log("lllss" + JSON.stringify(data[questionIndex]["question1"]) + "voici la")
        // alert(JSON.stringify(question))
        // console.log(JSON.stringify(data))
    }

    useEffect(() => {

        getData()
    }, [])


    return (
        <IonPage>
            <IonContent>
                {questionTitle}
                QuestionFinal


            </IonContent>
        </IonPage>
    )
}
