
import "./keyWordExplainButton.css";
import { IonButton } from '@ionic/react';
import axios from 'axios';
import { useContext, useState } from "react";


import { ServerResponseContext } from "../Context/ServerResponseContext";
interface KeyWordExplainButtonProps {
    userkeyWord: string;

}


function KeyWordExplainButton({ userkeyWord }: KeyWordExplainButtonProps) {
    const { serverResponse, setServerResponse } = useContext(ServerResponseContext);
    //  pour envoyer la reponse au context

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
            setServerResponse(serverResponse);
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



                {serverResponse}
            </h1>
        </div>
    )
}


export default KeyWordExplainButton;