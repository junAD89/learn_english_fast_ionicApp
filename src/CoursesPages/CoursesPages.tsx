
import { IonButton, IonContent, IonPage, IonTabBar, IonTabButton } from '@ionic/react'
import { useParams } from 'react-router-dom'
import './CoursesPages.css'


import { Browser } from "@capacitor/browser";


interface RouteParams {
    id: string;
}

export default function CoursesPages() {
    const { id } = useParams<RouteParams>();


    const OpenWhatsApp = async () => {
        await Browser.open({ url: 'https://chat.whatsapp.com/EZreCndwjoaG5jdvJcdLgW' })
    }

    return (
        <IonPage>
            <h1>
                id: {id}
            </h1>

            {/* <IonTabBar>
                <IonTabButton tab='/tab2' href='/tab2'>
                    VALIDER
                </IonTabButton>
            </IonTabBar> */}


            <IonContent>
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
            </IonContent>
        </IonPage>
    )
}

