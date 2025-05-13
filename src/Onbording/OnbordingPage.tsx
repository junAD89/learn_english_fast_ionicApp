import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaWhatsapp } from "react-icons/fa";

import './OnbordingPage.css';
import { motion } from 'framer-motion';
import { Swiper as SwiperType } from 'swiper';


import { addDoc, collection } from "firebase/firestore";
import { IonButton } from '@ionic/react';

import db from "../FirebaseConfig/fire-config";
import PushNotificationPerms from '../components/PushNotificationPerms/PushNotificationPerms';
const OnbordingPage: React.FC = () => {
    const history = useHistory();

    const [howDiscover, setHowDiscover] = useState("");

    const [userUtility, setUserUtility] = useState("")

    const swiperRef = useRef<SwiperType | null>(null);

    const swiperToNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    }


    const howDiscoverFunction = async () => {
        try {
            const docRef = await addDoc(collection(db, "howDiscoverApp"), {
                reasons: howDiscover
            });
            console.log("added")
        } catch (error) {
            console.log(error)
        }
    }

    const utilityFunction = async () => {
        try {
            const docRef = await addDoc(collection(db, "utility_for_user"), {
                utility: userUtility
            })
        } catch (error) {

        }
    }

    const finish = () => {
        history.replace("/tab2")
        ///mise en local storage du have seen pour l utiliser dans la redirection dynamique dans app tsx  
        localStorage.setItem("haveSeen_onbordingPage", "true")
        utilityFunction();
        howDiscoverFunction()
    }
    return (
        <div className="onboarding-wrapper">


            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Pagination]}
                pagination={true}
                spaceBetween={0}
                slidesPerView={1}
                allowTouchMove={false}
                className="onboarding-swiper"
            >
                <SwiperSlide>
                    <div className="slide-title fade-in">
                        <h1 >
                            Booster votre anglais

                        </h1>

                    </div>
                    <div className="welcome-container">

                        <p className="welcome-description">
                            Chaque jour nous vous proposons de nouveaux
                            mots anglais
                            pour ameliorer votre vocabulaire
                        </p>
                    </div>
                    <IonButton
                        onClick={() => {
                            swiperToNext();
                        }}
                    >
                        Commencons
                    </IonButton>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='slide-question-title-container'>

                            <h1 className="slide-question-title fade-in">
                                Comment avez vous connu Fast English
                            </h1>
                        </div>


                        <div className="question-types-container">

                            <motion.div className="question-option selected scale-in">
                                <div
                                    onClick={() => {
                                        swiperToNext();
                                        setHowDiscover("status_whatsapp")
                                    }}
                                    className="option-content">

                                    <div className="option-icon">
                                        <FaWhatsapp />


                                    </div>
                                    <div className="option-text">
                                        <h2

                                        >Status Whatsapp</h2>
                                    </div>
                                </div>
                            </motion.div>


                            <motion.div className="question-option scale-in"
                            >
                                <div
                                    onClick={() => {
                                        swiperToNext();
                                        setHowDiscover("friend_send")
                                    }}
                                    className="option-content">
                                    <div className="option-icon">💝</div>
                                    <div className="option-text">
                                        <h2>Partage d'un ami</h2>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className="question-option scale-in">
                                <div
                                    onClick={() => {
                                        swiperToNext();
                                        setHowDiscover("reddit_community")
                                    }}
                                    className="option-content">
                                    <div className="option-icon">✨</div>
                                    <div className="option-text">
                                        <h2>Communaute Reddit</h2>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>















                <SwiperSlide>
                    <div>
                        <div className='slide-question-title-container'>

                            <h1 className="slide-question-title fade-in"
                                style={{
                                    fontSize: '30px',
                                }}
                            >
                                Que souhaitez vous faire avec Fast English?
                            </h1>
                        </div>


                        <div className="question-types-container">

                            <motion.div className="question-option selected scale-in">
                                <div
                                    onClick={() => {
                                        swiperToNext();
                                        setUserUtility("Apprendre_quelque_mot_par_jour")
                                    }}
                                    className="option-content">

                                    <div className="option-text">
                                        <div className="option-text">

                                            <h2>
                                                Apprendre quelque mots par jour
                                            </h2>
                                        </div>


                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className="question-option scale-in"
                            >
                                <div
                                    onClick={() => {
                                        swiperToNext()
                                        setUserUtility("juste_pour_voir")
                                    }}
                                    className="option-content">
                                    <div className="option-text">
                                        <h2>
                                            Juste pour voir...
                                        </h2>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className="question-option scale-in">
                                <div
                                    onClick={() => {
                                        swiperToNext();
                                        setUserUtility("avoir_de_la_motivation")
                                    }}
                                    className="option-content">
                                    <div className="option-text">
                                        <h2>
                                            Avoir la motivation pour apprendre
                                        </h2>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>




                <SwiperSlide
                    style={{
                        display: "flex",
                        justifyContent: 'center',
                    }}
                >
                    <div
                        onClick={() => {
                            finish()
                        }}>

                        <PushNotificationPerms />

                    </div>

                </SwiperSlide>



            </Swiper>


        </div>


    );

};

export default OnbordingPage;