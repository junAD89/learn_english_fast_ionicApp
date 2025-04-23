
import "./keyWordExplainButton.css";
import { IonButton } from '@ionic/react';
import axios from 'axios';
import { useState } from "react";



import Modal from "react-modal";



interface KeyWordExplainButtonProps {
    userkeyWord: string;

}



function KeyWordExplainButton({ userkeyWord }: KeyWordExplainButtonProps) {


    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }



    const [serverExple, setServerExple] = useState<string>(""); // ou un objet ou tableau si nécessaire


    const handleClick = () => {
        console.log(userkeyWord);
        alert(userkeyWord);
    };

    const handleServer = async () => {
        try {
            const response = await axios.post("http://localhost:3000/chat", {
                message: userkeyWord
            });

            const serverResponse = response.data;
            console.log(serverResponse);
            alert(serverResponse);

            setServerExple(serverResponse);

        } catch (error) {
            alert(error);
        }
    }
    return (
        <div className='showcase_container'>
            <IonButton
                onClick={() => {
                    handleServer()
                }}
                className='showcase_button'>

                Voir des exemples
            </IonButton>

            <h1 className="serverResponse">



                {serverExple}
            </h1>
            <IonButton
                onClick={() => openModal()}
            >
                show pop
            </IonButton>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Exemple Modal">
                <div>Contenu ici</div>
                <button onClick={closeModal}>Fermer</button>
            </Modal>
        </div>
    )
}


export default KeyWordExplainButton;