import React from 'react'
import Speech from 'react-speech';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function textSpeech() {
    const textstyle = {
        play: {
            hover: {
                backgroundColor: 'black',
                color: 'white'
            },
            button: {
                padding: '4',
                fontFamily: 'Helvetica',
                fontSize: '1.0em',
                cursor: 'pointer',
                pointerEvents: 'none',
                outline: 'none',
                backgroundColor: 'inherit',
                border: 'none'
            },
        }
    }

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>
                {transcript}
            </p>





            <Speech
                voice="Google UK English Male"
                textAsButton={true}
                displayText="Hello"
                text="I have text displayed as a button" />
        </div >
    )
}

export default textSpeech;