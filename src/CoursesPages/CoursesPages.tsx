import { IonButton, IonContent, IonPage } from '@ionic/react'
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router'



const CoursesPages: React.FC = () => {
    const { id } = useParams<{ id: string }>();


    const getData = async () => {
        const response = await axios.get("/levels/levelsData.json")
        const data = response.data;

        const { level1 } = data;

        const { id } = level1;
        console.log("voici la data " + JSON.stringify(id)); // Transforme l'objet en texte lisible




        return data

    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <IonPage>
            <IonContent >
                CoursesPages

                {id}

                <IonButton
                    onClick={() => {
                        getData()
                    }}
                >
                    show
                </IonButton>
            </IonContent>
        </IonPage>
    )
}


export default CoursesPages