import React , { useState, useContext } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faStop, faTimes } from '@fortawesome/free-solid-svg-icons';
import SimpleForm from './FeedbackChatbot/SimpleForms';
import '../custom.css';
// import {OpenAppContext } from '../Context/OpenAppContext';

const Home = () =>{
  let date=new Date().toLocaleString();
//   var styles = {
// // color:'violet',
//   backgroundImage: 'url('+background+')',
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   width: '100vw',
//   height: '100vh',
//   textAlign: 'center'
//   };
  // const [, setPage,,setValue] = useContext(OpenAppContext);
  const commands = [
    {
      command: "open *",
      callback: (website) => {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('opening'));
        window.open("http://" + website.split(" ").join("") + ".com");
        resetTranscript();
      },
    },
    {
      command: "background colour *",
      callback: (color) => {
        document.body.style.background = color;
        resetTranscript();
      },
    },
    {
      command: "reset",
      callback: () => {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Sure will reset'));
        //handleReset();
        resetTranscript();
      },
    },
    {
        command: "Arcus",
        callback: () => {
            window.open("http://arcus.csgcloudapp.com/");
            resetTranscript();
        },
      },
      {
        command: "*teams*",
        callback: () => {
            window.open(
              "https://teams.microsoft.com/l/entity/<appId>/<entityId>?webUrl=<entityWebUrl>&label=<entityLabel>&context=<context>");
            // resetTranscript();
        },
      },
      {
        command: "*time",
        callback: () => {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance('today is '+{date}));
          resetTranscript();
        },
      },
      {
        command: "Thank you",
        callback: () => {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance('your welcome'));
            resetTranscript();
        },
      },
      {
        command: "*alarm*",
        callback: () => {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance('what time'));
            resetTranscript();
        },
      },
      {
        command: "*what is*",
        callback: () => {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance('Showing the results from wikipedia'));
          // setPage('wiki');
          // setValue(transcript);
          resetTranscript();
        },
      },
      {
        command: "*trainings*",
        callback: () => {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance('Showing trinings in progress'));
            window.open("https://csguniversity.csod.com/catalog/CustomPage.aspx?id=20000498");
            resetTranscript();
        },
      },
      {
        command: "*Workday*",
        callback: () => {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance('Opening workday'));
            window.open("https://csguniversity.csod.com/catalog/CustomPage.aspx?id=20000498");
            resetTranscript();
        },
      },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  // const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    window.speechSynthesis.speak(new SpeechSynthesisUtterance('Hello, and welcome to nimbus ,I , am your voice assistant, select the below chatbot to provide feedback or use for help'));
    // microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    // microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };
    return (
        <>

        <div className="microphone-wrapper w-100 home-body ">
        <h1 style={ {textAlign: "center"}}>Hello, and welcome to Nimbus</h1><br/>
        <dic className="background" />
          <div className="microphone-container ">

            {isListening ?
              <>
                <div className="microphone-icon-container" onClick={stopHandle}>
                  <FontAwesomeIcon icon={faStop} />
                </div>
                <div className="microphone-status"></div>
                {/* <div className='svg-bg' /> */}
              </>
              :
              <div
                className="microphone-icon-container" onClick={handleListing}>
                <FontAwesomeIcon icon={faMicrophone} />
              </div>}
          </div>
          {transcript && (
            <div className="microphone-result-container">
              <div className="microphone-result-text">{transcript}</div>
              <button className="microphone-reset btn" onClick={handleReset}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          )}
        </div><SimpleForm /></>
    );
  };
  export default (Home);

