
import { IonButton, IonCard, IonContent, IonPage, IonTabBar, IonTabButton } from '@ionic/react'
import { useParams } from 'react-router-dom'
import './CoursesPages.css'


import { Browser } from "@capacitor/browser";
import axios from 'axios';
import { useEffect, useState } from 'react';



// interface pour recuperer les params de l'url
interface RouteParams {
    idParams: string;
}


export default function CoursesPages() {

    // recuperation des params de l'url
    const { idParams } = useParams<RouteParams>();


    // recuperation pour les mettres dans le state
    const [word, setWord] = useState("");
    const [id, setId] = useState("");
    const [tips, setTips] = useState("");
    const [exp, setExp] = useState("");
    const [example1, setExample1] = useState("");
    const [examplefr1, setExamplefr1] = useState("");
    const [example2, setExample2] = useState("");
    const [examplefr2, setExamplefr2] = useState("");



    useEffect(() => {
        getCourses()
    }, [])
    const getCourses = async () => {
        const response = await axios.get("/dailyWords/dailyWordsData.json")

        const serverResponse = response.data[`day${idParams}`];

        const { word, id, tips, exp, example1, examplefr1, example2, examplefr2 } = serverResponse;

        setWord(word)
        setId(id)
        setTips(tips)
        setExp(exp)
        setExample1(example1)
        setExamplefr1(examplefr1)
        setExample2(example2)
        setExamplefr2(examplefr2)
    }


    const OpenWhatsApp = async () => {
        await Browser.open({ url: 'https://chat.whatsapp.com/EZreCndwjoaG5jdvJcdLgW' })
    }

    return (
        <IonPage>
            <h1>
                id: {idParams}
            </h1>

            {/* <IonTabBar>
                <IonTabButton tab='/tab2' href='/tab2'>
                    VALIDER
                </IonTabButton>
            </IonTabBar> */}



            <IonContent>
                <h1>
                    {word}
                </h1>

                <IonCard>
                    <h1>
                        TIPS:
                        <span>
                            {tips}
                        </span>
                    </h1>
                </IonCard>
                <IonCard>
                    <h1>
                        First example:
                    </h1>
                    <span>
                        {example1}
                    </span>
                    <h1>
                        Traduction en francais:
                    </h1>
                    <span>
                        {examplefr1}
                    </span>
                </IonCard>
            </IonContent>




            {/* <IonContent>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        marginTop: '100px',
                        color: 'white',
                    }}>
                    <h1>
                        les cours seront bientot   disponible.
                    </h1>
                    <h3>
                        Rejoingnez notre groupe whatsapp.
                        Pour etre informer
                    </h3>
                </div>

                <IonButton
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={() => {
                        OpenWhatsApp()
                    }}
                >
                    Rejoindre
                </IonButton>
            </IonContent> */}
        </IonPage >
    )
}

