import React from 'react';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './OnbordingPage.css';

const OnbordingPage: React.FC = () => {
    const history = useHistory();

    const handleStart = () => {
        localStorage.setItem("hasSeenHome", "true");
        history.replace("/login");
    };

    const slides = [
        {
            title: "Créez des lettres qui touchent les cœurs ❤️",
            content: (
                <div className="welcome-container">
                    <div className="hero-image">
                        <img
                            src="/path-to-letter-icon.png"
                            alt="Letter icon"
                            className="welcome-image floating"
                        />
                    </div>
                    <p className="welcome-description">
                        Exprimez vos sentiments avec élégance et sincérité.
                    </p>
                </div>
            )
        },
        {
            title: " ",
            content: (
                <div className="letter-types-container">
                    <div className="letter-option selected scale-in">
                        <div className="option-content">
                            <div className="option-icon">🎨</div>
                            <div className="option-text">
                                <h3>Style Personnel</h3>
                                <p>Ajoutez votre touche unique avec des émojis et des expressions personnalisées.</p>
                            </div>
                        </div>
                    </div>
                    <div className="letter-option scale-in" style={{ animationDelay: '0.2s' }}>
                        <div className="option-content">
                            <div className="option-icon">💝</div>
                            <div className="option-text">
                                <h3>Messages Significatifs</h3>
                                <p>Mettez en valeur les qualités qui rendent votre personne spéciale.</p>
                            </div>
                        </div>
                    </div>
                    <div className="letter-option scale-in" style={{ animationDelay: '0.4s' }}>
                        <div className="option-content">
                            <div className="option-icon">✨</div>
                            <div className="option-text">
                                <h3>Partage Instantané</h3>
                                <p>Diffusez votre message d'amour sur vos réseaux préférés.</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            showButton: true
        }
    ];

    return (
        <div className="onboarding-wrapper">
            <div className="onboarding-container">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    className="onboarding-swiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-content">
                                <h2 className="slide-title fade-in">{slide.title}</h2>
                                <h2 className='slide-content'>{slide.content}</h2>
                                {slide.showButton && (
                                    <div className={`navigation-buttons ${index === 1 ? 'slide-two' : ''}`}>
                                        <button className="button button-primary" onClick={handleStart}>
                                            Commencer
                                        </button>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default OnbordingPage;