import { IonContent, IonPage } from '@ionic/react'
import "./Tab2.css";
import { useHistory } from 'react-router';
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { FinishLessonStateContext } from '../Context/FinishLessonStateContext/FinishLessonStateContext';
import { toast, Toaster } from 'sonner';
const Tab2: React.FC = () => {


  const history = useHistory();
  const handleClick = () => {
    history.push("/testPage");
  }

  const imageUrl = "chapiter1/avatar/mark.png";///url de l img
  const imageUrlChap2 = "chapiter1/avatar/mrsmith.png";///url de l img
  const imageUrlChap3 = "chapiter1/avatar/mrsmith.png";///url de l img
  const imageUrlChap4 = "chapiter1/avatar/mrsmith.png";///url de l img
  const imageUrlChap5 = "chapiter1/avatar/mrsmith.png";///url de l img


  ////const de test 
  const [isActive, setIsActive] = useState(true)


  let numberD = 2

  const { chapiter1lesson1, chapiter1lesson2, chapiter1lesson3, chapiter1lesson4, chapiter1lesson5 } = useContext(FinishLessonStateContext)

  const getData = async () => {
    const response = await axios.get("levels/levelsData.json");

    const data = response.data;

    const { level1 } = data;    // recuperation des donnes de leve 1

    const { level } = level1;///recuperation du level lui meme exple level : 1 , 2 ou 3



  }


  useEffect(() => {
    const stateLevel1 = localStorage.getItem("1_chapiter1")

    // if (stateLevel1) {
    //   alert("Level 1 termine")
    // }
    // else {
    //   alert("Level 1 non termine")
    // }

    // alert(typeof chapiter1lesson1)

  })

  return (
    <IonPage>

      <Toaster />
      <IonContent>
        <div
          className='level_all_container'
        >
          <div
            onClick={() => {
              history.push("/courses/1")
            }}
            className='level_container'
          >
            <img
              className={`level_container_image ${isActive ? "img_effect" : ""}`}

              src={imageUrl} />
            <h2>
              Level 1
            </h2>
          </div>


          {/* 
          <div
            onClick={() => {
              history.push("/courses/3")
            }}

            className='level_container'
          >
            <img
              className={`level_container_image ${isActive ? "img_effect" : ""}`}

              src={imageUrlChap3} alt="" />
            <h2>
              Level 3
            </h2>
          </div>
          <div
            onClick={() => {
              history.push("/courses/4")
            }}

            className='level_container'
          >
            <img
              className={`level_container_image ${isActive ? "img_effect" : ""}`}

              src={imageUrlChap4} alt="" />
            <h2>
              Level 4
            </h2>
          </div>
 */}


          {!chapiter1lesson1 == false ?

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


            :

            <div

              onClick={() => {
                toast.info("please finish the prevous lesson")
              }}

              className='level_container not_finish'
            >
              <img
                className={"level_container_image"}

                src={imageUrlChap2} />
              <h2>
                Level 2
              </h2>
            </div>

          }

          {!chapiter1lesson2 == false ?
            <div onClick={() => { history.push("/courses/3") }} className='level_container'>
              <img className="level_container_image" src={imageUrlChap3} alt="" />
              <h2>Level 3</h2>
            </div>
            :
            <div onClick={() => { toast.info("please finish the prevous lesson") }} className='level_container not_finish'>
              <img className="level_container_image " src={imageUrlChap3} />
              <h2>Level 3</h2>
            </div>
          }

          {!chapiter1lesson3 == false ?
            <div onClick={() => { history.push("/courses/4") }} className='level_container'>
              <img className="level_container_image" src={imageUrlChap4} alt="" />
              <h2>Level 4</h2>
            </div>
            :
            <div onClick={() => { toast.info("please finish the prevous lesson") }} className='level_container not_finish'>
              <img className="level_container_image" src={imageUrlChap4} />
              <h2>Level 4</h2>
            </div>
          }

          {!chapiter1lesson4 == false ?
            <div onClick={() => { history.push("/courses/5") }} className='level_container'>
              <img className={"level_container_image"} src={imageUrlChap5} alt="" />
              <h2>Level 5</h2>
            </div>
            :
            <div onClick={() => { toast.info("please finish the prevous lesson") }} className='level_container not_finish'>
              <img className={"level_container_image"} src={imageUrlChap5} />
              <h2>Level 5</h2>
            </div>
          }


        </div>
      </IonContent>
    </IonPage>
  )
}





export default Tab2;
