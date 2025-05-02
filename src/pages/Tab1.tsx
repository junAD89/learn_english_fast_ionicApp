import { IonButton, IonPage } from '@ionic/react';
import './Tab1.css';
import ButtonPrincipale from '../components/Button.tsx/ButtonPrincipale';
import axios from 'axios';

import { useState } from 'react';
import { LocalNotifications } from '@capacitor/local-notifications';
import { toast, Toaster } from 'sonner';
import PushNotificationPerms from '../components/PushNotificationPerms/PushNotificationPerms';
import { useHistory } from 'react-router';


const Tab1: React.FC = () => {

  const history = useHistory();



  return (
    <IonPage>
      <Toaster />


      <IonButton
        onClick={() => {
          history.push("/courses/123");
        }}
      >
        nav
      </IonButton>

      <PushNotificationPerms />
    </IonPage >
  );
}

export default Tab1;
