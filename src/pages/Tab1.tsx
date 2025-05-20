import { IonButton, IonPage } from '@ionic/react';
import './Tab1.css';
import ButtonPrincipale from '../components/Button.tsx/ButtonPrincipale';
import axios from 'axios';

import { useContext, useEffect, useState } from 'react';
import { LocalNotifications } from '@capacitor/local-notifications';
import { toast, Toaster } from 'sonner';
import PushNotificationPerms from '../components/PushNotificationPerms/PushNotificationPerms';
import { useHistory } from 'react-router';

import { TextToSpeech } from '@capacitor-community/text-to-speech';



const Tab1: React.FC = () => {

  const history = useHistory();


  const speak = async () => {
    await TextToSpeech.speak({
      text: 'This is a sample text.',
      lang: 'en-US',
      rate: 1.0,
      pitch: 1.0,
      volume: 1.0,
      category: 'ambient',
      queueStrategy: 1
    });
  };

  const getSupportedLanguages = async () => {
    const languages = await TextToSpeech.getSupportedLanguages();
    alert(JSON.stringify(languages));
  };

  const getSupportedVoices = async () => {
    const voices = await TextToSpeech.getSupportedVoices();
    alert(JSON.stringify(voices));
  };

  const isLanguageSupported = async (lang: string) => {
    const isSupported = await TextToSpeech.isLanguageSupported({ lang });
    alert(JSON.stringify(isSupported));
  };


  return (
    <IonPage>
      <Toaster />


      <IonButton
        style={{
          color: "white",
          backgroundColor: "white",
        }}
        onClick={() => {
          history.push('/finishSessionChapiter1')
        }}
      >
        finishSessionChapiter1
      </IonButton>

      <IonButton
        onClick={() => {
          getSupportedLanguages()
        }}
      >
        getSupportedLanguages
      </IonButton>

      <IonButton
        onClick={() => {
          getSupportedVoices()
        }}
      >
        getSupportedVoices
      </IonButton>
      <IonButton
        onClick={() => {
          isLanguageSupported("en-US")
        }}>
        isLanguageSupported
      </IonButton>

      {/* <PushNotificationPerms /> */}
    </IonPage >
  );
}

export default Tab1;
