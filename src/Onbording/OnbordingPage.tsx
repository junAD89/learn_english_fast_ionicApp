import React from 'react';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './OnbordingPage.css';
import { motion } from 'framer-motion';

const OnbordingPage: React.FC = () => {
    const history = useHistory();




    return (
        <div className="onboarding-wrapper">


            <Swiper
                modules={[Pagination]}
                pagination={true}
                spaceBetween={0}
                slidesPerView={1}
                className="onboarding-swiper"
            >
                <SwiperSlide>
                    <div className="slide-title fade-in">
                        <h1 >
                            Booster votre anglais

                        </h1>
                        <h2>
                            🚀
                        </h2>
                    </div>
                    <div className="welcome-container">

                        <p className="welcome-description">
                            Chaque jour nous vous proposons de nouveaux
                            mots anglais
                            pour ameliorer votre vocabulaire
                        </p>
                    </div >
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
                                        console.log("Whatsapp")
                                    }}
                                    className="option-content">

                                    <div className="option-icon">🎨</div>
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
                                        console.log("Friend")
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
                                        console.log("Reddit")
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
                                Que souhaitez vous faire avec Fast English
                            </h1>
                        </div>


                        <div className="question-types-container">

                            <motion.div className="question-option selected scale-in">
                                <div
                                    onClick={() => {
                                        console.log("Whatsapp")
                                    }}
                                    className="option-content">

                                    <div className="option-text">
                                        <h2>
                                            Apprendre quelque mots par jour
                                        </h2>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className="question-option scale-in"
                            >
                                <div
                                    onClick={() => {
                                        console.log("Friend")
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
                                        console.log("Reddit")
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
            </Swiper>
        </div>
    );

};

export default OnbordingPage;