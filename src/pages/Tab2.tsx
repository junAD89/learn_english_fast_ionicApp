import { IonContent, IonPage } from '@ionic/react'
import "./Tab2.css";
import { useHistory } from 'react-router';
import axios from 'axios';
import { useEffect } from 'react';
const Tab2: React.FC = () => {


  const history = useHistory();
  const handleClick = () => {
    history.push("/testPage");
  }

  const imageUrl = "chapiter1/avatar/mark.png";///url de l img
  const imageUrlChap2 = "chapiter1/avatar/mrsmith.png";///url de l img


  ////const de test 
  const isActive = true


  let numberD = 2

  const getData = async () => {
    const response = await axios.get("levels/levelsData.json");

    const data = response.data;

    const { level1 } = data;    // recuperation des donnes de leve 1

    const { level } = level1;///recuperation du level lui meme exple level : 1 , 2 ou 3


    // const {}


    // alert(level)

    // alert(JSON.stringify(data))
  }

  // usesre


  return (
    <IonPage>

      <IonContent>
        <div
          className='level_all_container'
        >
          <div
            onClick={handleClick}

            className='level_container'
          >
            <img
              className={`level_container_image ${isActive ? "img_effect" : ""}`}

              src={imageUrl} alt="" />
            <h2>
              Level 1
            </h2>
          </div>


          <div
            onClick={() => {
              history.push("/courses/2")
            }}

            className='level_container'
          >
            <img
              className={`level_container_image ${isActive ? "img_effect" : ""}`}

              src={imageUrlChap2} alt="" />
            <h2>
              Level 2
            </h2>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}


export default Tab2;
