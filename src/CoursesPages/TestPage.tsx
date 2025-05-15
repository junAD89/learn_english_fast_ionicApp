import { IonButton, IonContent, IonPage } from "@ionic/react";
import axios from "axios";

import "./TestPage.css";
import { Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";





export default function TestPage() {



    const [speakerName, setSpeakerName] = useState("");
    const [speakerText, setSpeakerText] = useState("");
    const [messages, setMessages] = useState<{ speaker: string; text: string; avatarImage: string }[]>([]);

    const [questionList, setQuestionList] = useState<{ reponse1: string; reponse2: string; reponse3: string }[]>([])
    const [currentIndex, setCurrentIndex] = useState(0);



    const [showQuestion, setShowQuestion] = useState(false);

    const getData = async () => {
        try {
            const response = await axios.get("/chapiter1/chapiter1Dialog.json")
            const data = response.data;

            if (currentIndex < data.length) {
                const { speaker, text, img } = data[currentIndex];


                setSpeakerName(speaker);
                setSpeakerText(text);

                setMessages((prev) => [...prev, { speaker, text, avatarImage: img }]);

                console.log(speaker, text)
                setCurrentIndex((prev) => prev + 1);
            }
            else {
                setShowQuestion(true);
                getQuestions();

            }

            return data;
        }
        catch (error) {
            console.error(error);
        }
    }


    function show() {
        getData();

    }

    useEffect(() => {
        getData();
    }, [])

    const getQuestions = async () => {
        const response = await axios.get("chapiter1/question1.json")

        const data = response.data;


        const { reponse1, reponse2, reponse3 } = data;

        setQuestionList((prev) => [...prev, { reponse1, reponse2, reponse3 }]);


        console.log(questionList)


    }


    const handleCheckReponse = async (question: string) => {

        try {
            const response = await axios.get("chapiter1/question1.json");

            const data = response.data;

            const { trueReponse } = data;///on recupere la reponse correcte

            // #faire la fonction de comparaison


            if (question == String(trueReponse)) {
                alert("Trouve");
            } else {
                alert("Faux")
            }


        } catch (error) {
            console.error(error)
        }

    }


    return (
        <IonPage>
            <IonContent>
                <div className="discusions_contaner">
                    {messages.map((msg, index) => (
                        <div className="dialog" key={index}>
                            <div className="avatar_img_container">
                                <img className="avatar_img" src={msg.avatarImage} />
                            </div>
                            <div className="dialog_container">
                                <p className="dialog_avatar_name">{msg.speaker}</p>
                                <h5>{msg.text}</h5>
                            </div>
                            <Languages size={39} />
                        </div>
                    ))}

                    {showQuestion ? (
                        <div className="question_container">
                            <h1>De quoi parle-t-il ?</h1>
                            {questionList.map((question, index) => (
                                <div key={index} className="question_button_container">
                                    <button className="question_button"
                                        onClick={() => {
                                            handleCheckReponse(question.reponse1);
                                        }}
                                    >
                                        {question.reponse1}
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleCheckReponse(question.reponse2);
                                        }
                                        }
                                        className="question_button">
                                        {question.reponse2}
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleCheckReponse(question.reponse3);
                                        }}
                                        className="question_button">
                                        {question.reponse3}
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <motion.div
                                whileTap={{ scale: '1.2px' }}
                                className="button_container">
                                <button
                                    className="start_button"
                                    onClick={() => {
                                        show();
                                    }}
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