import { IonButton, IonContent, IonPage } from '@ionic/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router'



const CoursesPages: React.FC = () => {
    const { idParams } = useParams<{ idParams: string }>();


    const [speakerName, setSpeakerName] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [speakerText, setSpeakerText] = useState("");
    const [messages, setMessages] = useState<{ speaker: string; text: string; avatarImage: string }[]>([]);
    const [questionList, setQuestionList] = useState<{ reponse1: string; reponse2: string; reponse3: string }[]>([])




    const getQuestions = async () => {
        const response = await axios.get(`chapiter${idParams}/chapiter${idParams}Dialog.json`)

        const data = response.data;


        const { reponse1, reponse2, reponse3 } = data;

        setQuestionList((prev) => [...prev, { reponse1, reponse2, reponse3 }]);


        console.log(questionList)


    }

    return (
        <IonPage>
            <IonContent >
                CoursesPages

                {idParams}

                <IonButton
                    onClick={() => {
                        // getData()
                    }}
                >
                    show
                </IonButton>
            </IonContent>
        </IonPage>
    )
}


export default CoursesPages