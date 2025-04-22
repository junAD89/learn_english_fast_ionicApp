import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import KeyWordData from '../keyWord/KeyWord';
import KeyWordExplainButton from "../keyWordExplain/keyWordExplainButton";
import { useContext, useEffect, useState } from 'react';
import { DiamonContext } from '../Context/DiamonContext/DiamonContext';


const Tab2: React.FC = () => {


  const { diamondNumber, setDiamondNumber, incrementDiamonNumber, decrementDiamonNumber } = useContext(DiamonContext)
  const [userkeyWord, setUserkeyWord] = useState("");


  useEffect(() => {
    if (diamondNumber <= 0) {
      console.log("Les diamonds sont finis");

    }
  })
  return (
    <IonPage>
      {/* <h1>
        Voici le nmbre de diamand: {diamondNumber}
      </h1> */}

      <KeyWordData />
      <KeyWordExplainButton userkeyWord={userkeyWord} />
    </IonPage>
  );
};

export default Tab2;
