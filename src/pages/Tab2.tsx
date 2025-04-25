import { IonButton, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import KeyWordData from '../keyWord/KeyWord';
import KeyWordExplainButton from "../keyWordExplain/keyWordExplainButton";
import { useContext, useEffect, useState } from 'react';
import { DiamonContext } from '../Context/DiamonContext/DiamonContext';

import { LocalNotifications } from "@capacitor/local-notifications";


import Modal from "react-modal";
import { ServerResponseContext } from '../Context/ServerResponseContext';
import AdBanner from '../AdmobPages/AdBanner';




const Tab2: React.FC = () => {


  ///importation des contextes
  const { diamondNumber, setDiamondNumber, incrementDiamonNumber, decrementDiamonNumber } = useContext(DiamonContext)

  const { serverResponse, setServerResponse } = useContext(ServerResponseContext)

  const [userkeyWord, setUserkeyWord] = useState("");

  const [modalVisbility, setModalVisbility] = useState(false)





  ////demander la permission a l user 

  const checkPermission = async () => {
    const permission = await LocalNotifications.requestPermissions();

    alert("voici la permission donne :" + JSON.stringify(permission));
  }




  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }
  useEffect(() => {
    if (serverResponse) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  })



  useEffect(() => {
    if (serverResponse) {
      setIsOpen(true);
    }
  }, [serverResponse]);

  useEffect(() => {
    if (diamondNumber <= 0) {
      console.log("Les diamonds sont finis");

    }
  })
  return (
    <div>

      {/* <IonButton
        style={{
          marginTop: "20vh",
        }}
        onClick={() => checkPermission()}
      >
        checkPermission
      </IonButton> */}




      <div className='serverResponseContainer'>
        {serverResponse}
      </div>
      <div>



        <p>
          Hi it up
        </p>
        <KeyWordData />
        <KeyWordExplainButton userkeyWord={userkeyWord} />

      </div>
      <AdBanner />

    </div >
  );
};

export default Tab2;
