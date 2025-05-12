import { IonButton, IonContent, IonPage } from "@ionic/react";
import axios from "axios";

import "./TestPage.css";
import { Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, scale } from "framer-motion";

export default function TestPage() {

    const [speakerName, setSpeakerName] = useState("");
    const [speakerText, setSpeakerText] = useState("");
    const [messages, setMessages] = useState<{ speaker: string; text: string }[]>([]);

    const [currentIndex, setCurrentIndex] = useState(0);



    const [showQuestion, setShowQuestion] = useState(false)

    const getData = async () => {

        try {
            const response = await axios.get("/chapiterOne/chapiterOneDialog.json")

            const data = response.data;


            if (currentIndex < data.length) {
                const { speaker, text } = data[currentIndex];



                setSpeakerName(speaker);
                setSpeakerText(text);

                setMessages((prev) => [...prev, { speaker, text }]);

                console.log(speaker, text)
                setCurrentIndex((prev) => prev + 1);
            }
            else {
                setShowQuestion(true)
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


    return (
        <IonPage>


            <IonContent>


                <div className="discusions_contaner ">




                    {messages.map((msg, index) => (
                        <div className="dialog" key={index}>
                            <div className="avatar_img_container">
                                <img className="avatar_img" src="..." />
                            </div>
                            <div className="dialog_container">
                                <p className="dialog_avatar_name">{msg.speaker}</p>
                                <h5>{msg.text}</h5>
                            </div>
                            <Languages size={39} />
                        </div>
                    ))}

                    {showQuestion &&
                        <div>

                        </div>

                    }
                </div>





                <motion.div
                    whileTap={{ scale: '1.5px' }}
                    className="button_container">
                    <button

                        onClick={() => {
                            show();
                        }}
                    >
                        Continuer
                    </button>
                </motion.div>
            </IonContent>
        </IonPage >
    )
}