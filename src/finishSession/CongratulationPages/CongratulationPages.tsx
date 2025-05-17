import { IonButton, IonCard, IonContent, IonPage } from '@ionic/react'


import "./CongratulationPages.css"
import { useHistory } from 'react-router'
import { useEffect, useRef } from 'react'

export default function CongratulationPages() {

    const SuccessAudioRef = useRef<HTMLAudioElement>(null)

    const history = useHistory()
    const navToHome = () => {
        history.replace("/tab2")
    }

    const SuccessAudioUrl = 'Audio/success.mp3'


    useEffect(() => {

        SuccessAudioRef.current?.play()
    }, [])
    return (
        <IonPage>

            <IonContent>
                <audio ref={SuccessAudioRef} src={SuccessAudioUrl}></audio>

                <div className='congrat_text_container'>

                    <h1 className="congrat_text">
                        Congratulations! ✨
                    </h1>
                    <h2 className='congrat_text_h2'>
                        You win
                    </h2>
                </div>


                <div className="exp_container">

                    <IonCard >
                        <h1>
                            15

                            exp

                            🥇
                        </h1>

                    </IonCard>

                </div>


                <div className="exp_container">
                    <IonButton onClick={() => {
                        navToHome()
                    }}>
                        Continue
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}
