import { IonButton, IonPage } from '@ionic/react';
import './Tab1.css';
import ButtonPrincipale from '../components/Button.tsx/ButtonPrincipale';
import axios from 'axios';

import { useContext, useEffect, useState } from 'react';
import { LocalNotifications } from '@capacitor/local-notifications';
import { toast, Toaster } from 'sonner';
import PushNotificationPerms from '../components/PushNotificationPerms/PushNotificationPerms';
import { useHistory } from 'react-router';

import { } from "module";
import { FinishLessonStateContext, FinishLessonStateContextProvider } from '../Context/FinishLessonStateContext/FinishLessonStateContext';
const Tab1: React.FC = () => {

  const history = useHistory();

  const { chapiter1lesson1 } = useContext(FinishLessonStateContext)
  useEffect(() => {
    alert(chapiter1lesson1)
  })
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
