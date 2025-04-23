import { IonButton, IonPage } from '@ionic/react';
import './Tab1.css';
import ButtonPrincipale from '../components/Button.tsx/ButtonPrincipale';
import axios from 'axios';

import { useState } from 'react';
import { LocalNotifications } from '@capacitor/local-notifications';
import { toast, Toaster } from 'sonner';


const Tab1: React.FC = () => {



  const handleNotification = async () => {
    toast.success("notification envoyée")
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "titre de la notification ",
          body: "Ceci est le body",
          id: Date.now() % 100000,

          schedule: { at: new Date(Date.now() + 1000 * 5) },
          sound: undefined,
        }
      ]
    })
  }
  return (
    <IonPage>
      <Toaster />

      <h1
        style={{
          marginTop: "20vh",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        hi what 's up
      </h1>

      <IonButton
        expand="block"
        style={{
          margin: "20px",
          fontSize: "18px"
        }}
        onClick={handleNotification}
      >
        Click Me
      </IonButton>
    </IonPage >
  );
}

export default Tab1;
