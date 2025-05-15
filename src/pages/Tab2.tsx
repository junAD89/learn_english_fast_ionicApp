import { IonContent, IonPage } from '@ionic/react'
import "./Tab2.css";
import { useHistory } from 'react-router';
const Tab2: React.FC = () => {


  const history = useHistory();
  const handleClick = () => {
    history.push("/testPage");
  }

  const imageUrl = "chapiter1/avatar/mark.png";///url de l img


  ////const de test 
  const isActive = true


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

              src={imageUrl} alt="" />
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
