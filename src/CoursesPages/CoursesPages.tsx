import { IonButton, IonContent, IonPage } from '@ionic/react'
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router'



const CoursesPages: React.FC = () => {
    const { idParams } = useParams<{ idParams: string }>();


    const getData = async () => {
        const response = await axios.get("/levels/levelsData.json");
        const data = response.data;
        const levelIndex = `level${idParams}`;

        console.log("data =", data);
        console.log("levelIndex =", levelIndex);
        console.log("data[levelIndex] =", data[levelIndex]);



        const { id } = data[levelIndex];
        console.log("id =", id);

        return data;
    };

    useEffect(() => {
        getData()
    }, [])
    return (
        <IonPage>
            <IonContent >
                CoursesPages

                {idParams}

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