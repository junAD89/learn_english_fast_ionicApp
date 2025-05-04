import './Tab2.css';
import KeyWordData from '../keyWord/KeyWord';
import { useContext, useEffect, useState } from 'react';
import { DiamonContext } from '../Context/DiamonContext/DiamonContext';

import { LocalNotifications } from "@capacitor/local-notifications";


import Modal from "react-modal";
import { ServerResponseContext } from '../Context/ServerResponseContext';
import AdBanner from '../AdmobPages/AdBanner';
import AdInterticial from '../AdmobPages/AdInterticial';
import axios from 'axios';


import Lottie from "lottie-react";
import click from "../assets/lottieAnimations/click.json";

// import animaTion from "../assets/lottieAnimations";

import thunder from "../assets/lottieAnimations/thunder.json";
import diamond from "../assets/lottieAnimations/diamond.json";
import fire from "../assets/lottieAnimations/fire.json";
import clickv2 from "../assets/lottieAnimations/clickv2.json";
import { IonPage, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';

const Tab2: React.FC = () => {


  ///importation des contextes
  const { diamondNumber, setDiamondNumber, incrementDiamonNumber, decrementDiamonNumber } = useContext(DiamonContext)

  const { serverResponse, setServerResponse } = useContext(ServerResponseContext)








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






  const history = useHistory();


  return (
    <IonPage>

      <IonToolbar>
        <div
          style={{
            display: 'flex',
            marginTop: '10px',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            color: "white"
          }}
        >

          <div
            onClick={() => {
              history.push("/onbordingpage")
            }}
            style={{
              display: "flex"
            }}>
            <Lottie animationData={fire} style={{
              width: '50px',
              height: "59px"
            }} />
            <h1>
              30
            </h1>
          </div>
          <div style={{
            display: "flex"
          }}>
            <Lottie animationData={diamond} style={{
              width: '100px',
              height: "59px"
            }} />

            <h1>
              20
            </h1>
          </div>
          {/* <div style={{
            display: "flex"
          }}>
            <Lottie animationData={thunder} style={{
              width: '100px',
              height: "59px"
            }} />
            <h1>
              10
            </h1>
          </div> */}
        </div>
      </IonToolbar>




      <div>

        {/* pour obtenir le mots de data json en local en fonction du jour */}
        <KeyWordData />

        {/* pour contacter le vrai serveur en ligne */}

      </div>
      {/* <AdInterticial /> */}

      {/* <AdBanner /> */}

    </IonPage>
  );
};

export default Tab2;
