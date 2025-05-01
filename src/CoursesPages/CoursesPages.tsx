
import { IonPage, IonTabBar, IonTabButton } from '@ionic/react'
import './CoursesPages.css'

export default function CoursesPages() {
    return (
        <IonPage>
            <div>CoursesPages</div>
            <IonTabBar>
                <IonTabButton tab='/home' href='/home'>

                    VALIDER
                </IonTabButton>


            </IonTabBar>
        </IonPage>
    )
}

