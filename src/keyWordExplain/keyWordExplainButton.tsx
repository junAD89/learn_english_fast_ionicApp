
import "./keyWordExplainButton.css";
import axios from 'axios';
import { useContext, useState } from "react";


import { ServerResponseContext } from "../Context/ServerResponseContext";
import { BadgeInfo } from "lucide-react";

import { motion } from "framer-motion";
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
            const response = await axios.post("https://fastenglishserver-chat.glitch.me/chat", {
                message: userkeyWord
            });

            const serverResponse = JSON.stringify(response.data);

            setServerExple(serverResponse);


            ////inserer la reponse du serveur dans le context pour 
            // pouvoir l utiliser dans les autres pages 
            setServerResponse(serverResponse);
        } catch (error) {
            alert(error);
        }
    }
    return (
        <div className='showcase_container'>
            <motion.div
                onClick={() => {
                    handleServer()
                }}
                className='showcase_button'
                initial={{ rotate: "0deg" }}
                animate={{ rotate: "360deg" }}
                transition={{ ease: "easeOut", duration: 2 }}


            >

                <BadgeInfo size={30} />

            </motion.div>



        </div >
    )
}


export default KeyWordExplainButton;