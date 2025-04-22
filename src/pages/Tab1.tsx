import { IonButton, IonPage } from '@ionic/react';
import './Tab1.css';
import ButtonPrincipale from '../components/Button.tsx/ButtonPrincipale';
import axios from 'axios';

import Modal from "react-modal";
import { useState } from 'react';


const Tab1: React.FC = () => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <IonPage>

      <IonButton onClick={openModal}>
        Ouvrir Modal
      </IonButton>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemple Modal"
      >
        <div>Contenu ici</div>
        <button onClick={closeModal}>Fermer</button>
      </Modal>

    </IonPage>
  );
}

export default Tab1;
