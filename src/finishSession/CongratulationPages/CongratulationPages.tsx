import { IonCard, IonContent, IonPage } from '@ionic/react'


import "./CongratulationPages.css"

export default function CongratulationPages() {
    return (
        <IonPage>

            <IonContent>

                <div className='congrat_text_container'>

                    <h1 className="congrat_text">
                        Congratulations!
                    </h1>
                    <h2 className='congrat_text_h2'>
                        You win
                    </h2>
                </div>

                <IonCard>

                </IonCard>

                <button>
                    Continue
                </button>
            </IonContent>
        </IonPage>
    )
}
