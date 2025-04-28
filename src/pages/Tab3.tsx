import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

import dayjs from "dayjs";
import { useEffect, useState } from 'react';
import { DiffIcon } from 'lucide-react';

const Tab3: React.FC = () => {


  const [visibleDate, setVisibleDate] = useState(0);



  const date1 = dayjs('2024-04-25');
  const date2 = dayjs('2024-04-27');

  const diff = date2.diff(date1, 'millisecond'); // retourne 2

  // const dif = date2.diff


  const getMonth = async () => {

    const day = dayjs().isValid()

    console.log("La date est :", day);

    console.log("La diff  est de :", diff);

    setVisibleDate(diff)

  }

  useEffect(() => {
    getMonth();
  }, []);








  return (
    <IonPage>
      <DiffIcon />
      <h1>
        {
          visibleDate
        }
      </h1>
    </IonPage>
  );
};

export default Tab3;

