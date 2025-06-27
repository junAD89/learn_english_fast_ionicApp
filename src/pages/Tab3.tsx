import { IonButton, IonContent, IonPage } from '@ionic/react';
import './Tab3.css';


import StartApp from "../../src/plugins/startapp";
const Tab3: React.FC = () => {




  const showAd = async () => {
    try {
      console.log('Showing ad...');
      await StartApp.showInterstitial();
      console.log('Ad shown!');
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

