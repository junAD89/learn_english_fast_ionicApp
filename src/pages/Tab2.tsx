import { IonContent, IonPage } from '@ionic/react'
import "./Tab2.css";
import { useHistory } from 'react-router';
const Tab2: React.FC = () => {


  const history = useHistory();
  const handleClick = () => {
    history.push("/testPage");
  }
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
              src="https://imgs.search.brave.com/R-y6i1IMtgLSSII9GzS1fYPRr_y6FC3x2AcBFZDb1v0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmV1dGVycy5jb20v/cmVzaXplci92Mi9Y/VEhHRU9VR1JGTEtC/SzdDR1lVN0xRQUZQ/US5qcGc_YXV0aD1l/ZGM2MjJlZmY1ZWFi/NjEwMWU1NzMxNGUy/MGUwMWFjMDQ3MTk1/Njk2NWQwZGYxYzdh/ZjA3ZTcwYjEwZmQ5/OTU3JndpZHRoPTQ4/MCZxdWFsaXR5PTgw" alt="" />
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
