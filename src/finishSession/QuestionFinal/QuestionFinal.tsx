import { IonButton, IonCard, IonContent, IonLabel, IonPage, IonTitle } from '@ionic/react'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper as SwiperType } from 'swiper';


export default function QuestionFinal() {

    const [questionTitle, setQuestionTitle] = useState("");


    const [tableau, setTableau] = useState<number[]>([])

    const [questionIndex, setQuestionIndex] = useState(0);
    ///il s agit de l'index pour recupere l'objet des questionnaires 
    ///ca commence par 0 ,1 ,2


    useEffect(() => {
        console.log("Tableau mis à jour :", tableau);

    }, [tableau])

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("FinalChapiter/FinalChapiter.json")

            const data = response.data;

            // alert(data.length)




            const questionObj = data[questionIndex]//// const pour recupere la question 


            console.log("Voici la question " + JSON.stringify(questionObj))

            const { question } = questionObj;

            const { reponse1, reponse2, reponse3 } = questionObj;


            setTableau([reponse1, reponse2, reponse3]);


            // mettre les questions dans le tableau use state 


            setQuestionTitle(question)
            console.log("Voici la question" + JSON.stringify(question))


            console.log("lllss" + JSON.stringify(data[questionIndex]["question1"]) + "voici la")

            return questionIndex;
        }

        getData()
    }, [questionIndex]);

    const handleVerifyAnswer = async (text: any) => {

        const response = await axios.get("FinalChapiter/FinalChapiter.json")

        const data = response.data;

        const questionObj = data[questionIndex]//// const pour recupere la question 

        const { trueReponse } = questionObj;

        if (text == trueReponse) {
            alert("True");
            setQuestionIndex(prev => prev + 1)

        } else {
            alert("Faux")
        }


        alert(questionIndex);
        // alert(text);


        // alert(JSON.stringify(trueReponse))
    }
    const swiperRef = useRef<SwiperType | null>(null);


    const swiperToNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    }

    return (
        <IonPage>
            <IonContent>

                <Swiper
                    slidesPerView={1}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Pagination]}
                    pagination={true}
                >


                    <SwiperSlide>
                        {tableau.map((item, index) => (

                            <div
                                key={index}
                                onClick={() => {
                                    swiperToNext()
                                    handleVerifyAnswer(item)
                                }}
                            >
                                {item}


                            </div>
                        ))}

                    </SwiperSlide>

                </Swiper>



            </IonContent>
        </IonPage >
    )
}
