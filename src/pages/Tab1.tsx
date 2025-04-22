import { IonButton, IonPage } from '@ionic/react';
import './Tab1.css';
import ButtonPrincipale from '../components/Button.tsx/ButtonPrincipale';
import axios from 'axios';

const Tab1: React.FC = () => {

  const handleServer = async () => {
    try {
      const response = await axios.post("http://localhost:3000/test", {
        message: "Je suis beau",

      })

      console.log(response.data);

    } catch (error) {

      alert(error);

    }
  }
  return (
    <IonPage>

      <IonButton
        onClick={() => {
          handleServer()
        }}
      >

        handle server
      </IonButton>
    </IonPage>
  );
};

export default Tab1;
