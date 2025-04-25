import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import * as LiveUpdates from '@capacitor/live-updates';


import Modal from "react-modal";
import { useContext, useState } from 'react';
import { ServerResponseContext } from '../Context/ServerResponseContext';
const Tab3: React.FC = () => {



  const { serverResponse, setServerResponse } = useContext(ServerResponseContext)



  const checkUpdate = async () => {
    try {
      const result = await LiveUpdates.sync();
      alert('Live update result:' + result);
      alert('État de la mise à jour : ' + (result as any).status);
    } catch (err) {
      alert('Erreur Live Update:' + err);
      alert('Erreur Live Update : ' + (err as any).message);
    }
  };




  const [modalIsOpen, setIsOpen] = useState(true);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }





  return (
    <IonPage>
      <h1>
        Avant le Appflow
        { }
        apres le Appflow
      </h1>

      <button onClick={checkUpdate}>
        Tester mise à jour
      </button>



      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemple Modal">
        <div>Contenu ici</div>
        <IonButton onClick={closeModal}>
          Fermer
        </IonButton>
      </Modal>
      <IonButton
        onClick={() => openModal()}
      >
        show pop
      </IonButton>
    </IonPage>
  );
};

export default Tab3;


const checkUpdate = async () => {
  try {
    const result = await LiveUpdates.sync();
    console.log('Live update result:', result);
    alert('État de la mise à jour : ' + (result as any).status);
  } catch (err) {
    console.error('Erreur Live Update:', err);
    alert('Erreur Live Update : ' + (err as any).message);
  }
};
