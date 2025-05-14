import { IonContent, IonPage } from '@ionic/react'
import "./Tab2.css";
import { useHistory } from 'react-router';
const Tab2: React.FC = () => {


  const history = useHistory();
  const handleClick = () => {
    history.push("/testPage");
  }

  const imageUrl = "chapiterOne/avatar/mark.png"
  return (
    <IonPage>

      <IonContent>
        <div
          onClick={handleClick}
          className='level_all_container'>
          <div
            className='level_container'
          >
            <img
              className='level_container_image'
              src={imageUrl} alt="" />
            <h2>
              Level 1
            </h2>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}


export default Tab2;
