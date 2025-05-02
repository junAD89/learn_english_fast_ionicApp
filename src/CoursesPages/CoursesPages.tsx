
import { IonPage, IonTabBar, IonTabButton } from '@ionic/react'
import './CoursesPages.css'

export default function CoursesPages() {
    return (
        <IonPage>
            <div>CoursesPages</div>
            <IonTabBar>

                <IonTabButton tab='/tab2' href='/tab2'>
                    VALIDER
                </IonTabButton>


            </IonTabBar>
        </IonPage>
    )
}

