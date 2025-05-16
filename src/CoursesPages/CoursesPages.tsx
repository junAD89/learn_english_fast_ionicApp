import { IonButton, IonContent, IonPage } from '@ionic/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { Languages } from "lucide-react";
import { motion } from "framer-motion";

import './CoursesPages.css'

const CoursesPages: React.FC = () => {
    const { idParams } = useParams<{ idParams: string }>();

    const [speakerName, setSpeakerName] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [speakerText, setSpeakerText] = useState("");
    const [messages, setMessages] = useState<{ speaker: string; text: string; avatarImage: string }[]>([]);
    const [questionList, setQuestionList] = useState<{ reponse1: string; reponse2: string; reponse3: string }[]>([]);
    const [showQuestion, setShowQuestion] = useState(false);


    const [question, setQuestion] = useState("");////pour recuperer la question grace a un state 
    const getData = async () => {
        try {
            const response = await axios.get(`/chapiter${idParams}/chapiter${idParams}Dialog.json`);
            const data = response.data;
            // recuperation des donnees  dans la reponse de axios et les stocker dans les variables speakerName, speakerText, avatarImage


            if (currentIndex < data.length)
            // si currentIndex est inferieur a la longueur de data alors on incremente currentIndex
            {
                // destructuration des donnees  dans la reponse de axios et les stocker dans les variables speakerName, speakerText, avatarImage
                const { speaker, text, img } = data[currentIndex];


                // attribution des valeurs dans les variables speakerName, speakerText, avatarImage
                setSpeakerName(speaker);
                ////speaker name pour le nom de l'avatar
                setSpeakerText(text);
                ////speaker text pour le texte de l'avatar
                setMessages((prev) => [...prev, { speaker, text, avatarImage: img }]);
                // // message pour le texte de l'avatar


                setCurrentIndex((prev) => prev + 1);
                // incrementation de currentIndex
            } else {
                setShowQuestion(true);
                getQuestions();
            }

            return data;
        } catch (error) {
            console.error(error);
        }
    }

    const getQuestions = async () => {
        const response = await axios.get(`chapiter${idParams}/question${idParams}.json`);
        const data = response.data;
        const { reponse1, reponse2, reponse3, questionForUser } = data;
        setQuestion(questionForUser);

        setQuestionList((prev) => [...prev, { reponse1, reponse2, reponse3 }]);
    }



    // function pour verifier si la reponse est vrai ou fausse 
    const handleCheckReponse = async (question: string) => {
        try {
            const response = await axios.get(`chapiter${idParams}/question${idParams}.json`);
            const data = response.data;
            const { trueReponse } = data;

            // recuperation de la reponse de l'utilisateur grace a un state
            if (question === String(trueReponse)) {
                alert("Trouve");
            } else {
                alert("Faux");
            }


        } catch (error) {
            console.error(error);
        }
    }

    // fin de la fonction pour verifier si la reponse est vrai ou fausse



    // use effect pour appeler la fonction getData
    useEffect(() => {
        getData();
    }, []);

    return (
        <IonPage>
            <IonContent>
                <div className="discusions_contaner">
                    {messages.map((msg, index) => (
                        <div className="dialog" key={index}>
                            <div className="avatar_img_container">
                                <img className="avatar_img" src={msg.avatarImage} alt={msg.speaker} />
                            </div>
                            <div className="dialog_container">
                                <p className="dialog_avatar_name">{msg.speaker}</p>
                                <h5>{msg.text}</h5>
                            </div>
                            {/* <Languages size={39} /> */}
                        </div>
                    ))}

                    {showQuestion ? (
                        <div className="question_container">
                            <h1
                                style={{
                                    color: "black"
                                }}
                            >
                                {question}
                            </h1>
                            {questionList.map((question, index) => (
                                <div key={index} className="question_button_container">
                                    <button
                                        className="question_button"
                                        onClick={() => handleCheckReponse(question.reponse1)}
                                    >
                                        {question.reponse1}
                                    </button>
                                    <button
                                        className="question_button"
                                        onClick={() => handleCheckReponse(question.reponse2)}
                                    >
                                        {question.reponse2}
                                    </button>
                                    <button
                                        className="question_button"
                                        onClick={() => handleCheckReponse(question.reponse3)}
                                    >
                                        {question.reponse3}
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <motion.div
                                whileTap={{ scale: '1.2px' }}
                                className="button_container"
                            >
                                <button
                                    className="start_button"
                                    onClick={getData}
                                >
                                    Continuer
                                </button>
                            </motion.div>
                        </div>
                    )}
                </div>
            </IonContent>
        </IonPage>
    )
}

export default CoursesPages