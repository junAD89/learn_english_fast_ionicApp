import './Tab2.css';
import KeyWordData from '../keyWord/KeyWord';
import KeyWordExplainButton from "../keyWordExplain/keyWordExplainButton";
import { useContext, useEffect, useState } from 'react';
import { DiamonContext } from '../Context/DiamonContext/DiamonContext';

import { LocalNotifications } from "@capacitor/local-notifications";


import Modal from "react-modal";
import { ServerResponseContext } from '../Context/ServerResponseContext';
import AdBanner from '../AdmobPages/AdBanner';
import AdInterticial from '../AdmobPages/AdInterticial';
import axios from 'axios';


import Lottie from "lottie-react";

// import animaTion from "../assets/lottieAnimations";

import lottieFile from "../assets/lottieAnimations/animation.json";

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





  const [isOpen, setIsOpen] = useState(false);





  useEffect(() => {
    if (serverResponse) {
      setIsOpen(true);
    }
  }, [serverResponse]);




  const hookUpServer = async () => {
    const response = await axios.post("https://fastenglishserver-chat.glitch.me/hookUpServer");

    console.log(response.data);

  }
  const testServer = async () => {
    const response = await axios.post("https://fastenglishserver-chat.glitch.me/hookUpServer");

    console.log(response.data);

  }


  useEffect(() => {
    hookUpServer();
    testServer();
  }, []);




  return (
    <div>

      <Lottie animationData={lottieFile} loop={true} />
      {/* <IonButton
        style={{
          marginTop: "20vh",
        }}
        onClick={() => checkPermission()}
      >
        checkPermission
      </IonButton> */}







      <div>



        {/* pour obtenir le mots de data json en local en fonction du jour */}
        <KeyWordData />


        {/* pour contacter le vrai serveur en ligne */}
        <KeyWordExplainButton userkeyWord={userkeyWord} />



      </div>
      {/* <AdInterticial /> */}
      <AdBanner />

    </div >
  );
};

export default Tab2;
