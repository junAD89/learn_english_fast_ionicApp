import { IonButton, IonCard, IonContent, IonPage } from '@ionic/react'


import "./CongratulationPages.css"
import { useHistory } from 'react-router'
import { useEffect, useRef } from 'react'
import { showInterstitialAd } from '../../AdmobPages/AdInterticial'
import { AdMob } from '@capacitor-community/admob'

export default function CongratulationPages() {

    const SuccessAudioRef = useRef<HTMLAudioElement>(null)

    const history = useHistory()
    const navToHome = async () => {
        try {
            console.log("Nav")
            // await showInterstitialAd()

            showInterstitialAd()
            history.replace("/tab2");
            window.location.reload();
        } catch (error) {
            console.error(error)
        }
    };


    const SuccessAudioUrl = 'Audio/success.mp3'

    const interstitialOption = {
        adId: 'ca-app-pub-9593128253360038/4519587754',

    }


    useEffect(() => {
        async function ad() {
            await AdMob.prepareInterstitial(interstitialOption);
        }
        ad()

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
                    <IonButton


                        onClick={() => {
                            navToHome()
                        }}
                    >
                        Continue
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}
