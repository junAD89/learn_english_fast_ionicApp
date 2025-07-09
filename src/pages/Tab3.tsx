import { IonButton, IonContent, IonPage } from '@ionic/react';
import './Tab3.css';


import StartApp from "../../src/plugins/startapp";
const Tab3: React.FC = () => {




  const showAd = async () => {
    try {
      // Afficher la pub (elle se recharge automatiquement après)
      await StartApp.showInterstitial();
      // Précharger manuellement si besoin
      // await StartApp.loadInterstitial();
      console.log('Showing ad...');
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <IonPage>
      <IonContent>
        <h1>
          Hi
        </h1>


        <IonButton onClick={showAd} expand="block">
          Show Interstitial Ad
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;

