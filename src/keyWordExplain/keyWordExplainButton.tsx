
import "./keyWordExplainButton.css";
import { IonButton } from '@ionic/react';
import axios from 'axios';


interface KeyWordExplainButtonProps {
    userkeyWord: string;
}

function KeyWordExplainButton({ userkeyWord }: KeyWordExplainButtonProps) {

    const handleClick = () => {
        console.log(userkeyWord);
        alert(userkeyWord);
    };

    const handleServer = async () => {
        try {
            const response = await axios.post("http://localhost:3000/test", {
                message: userkeyWord
            });

            const serverResponse = response.data;
            console.log(serverResponse);
            alert(serverResponse);


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
        </div>
    )
}


export default KeyWordExplainButton