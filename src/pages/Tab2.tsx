import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import KeyWordData from '../keyWord/KeyWord';
import KeyWordExplainButton from "../keyWordExplain/keyWordExplainButton";
import { useContext, useEffect, useState } from 'react';
import { DiamonContext } from '../Context/DiamonContext/DiamonContext';

import { LocalNotifications } from "@capacitor/local-notifications";

const Tab2: React.FC = () => {







  const { diamondNumber, setDiamondNumber, incrementDiamonNumber, decrementDiamonNumber } = useContext(DiamonContext)
  const [userkeyWord, setUserkeyWord] = useState("");
  // Initialisation de l'état `serverResponse` dans Tab2

  const [serverResponse, setServerResponse] = useState<string>("");



  const handleSrverResponseProps = (response: string) => {
    setServerResponse(response);
    console.log("La reponse du serveur est :", response);

  }


  ////demander la permission a l user 

  const checkPermission = async () => {
    const permission = await LocalNotifications.requestPermissions();

    alert("voici la permission donne :" + JSON.stringify(permission));
  }


  useEffect(() => {
    if (diamondNumber <= 0) {
      console.log("Les diamonds sont finis");

    }
  })
  return (
    <IonPage>

      <IonButton
        style={{
          marginTop: "20vh",
        }}
        onClick={() => checkPermission()}
      >
        checkPermission
      </IonButton>
      {/* <h1>
        Voici le nmbre de diamand: {diamondNumber}
      </h1> */}

      <KeyWordData />
      <KeyWordExplainButton userkeyWord={userkeyWord} />
    </IonPage>
  );
};

export default Tab2;
