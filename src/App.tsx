import { Redirect, Route, useLocation } from 'react-router-dom';
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.class.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

import { AdMob } from "@capacitor-community/admob";
import { useEffect } from 'react';
import axios from 'axios';
import { House } from 'lucide-react';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import CoursesPages from './CoursesPages/CoursesPages';
import OnbordingPage from './Onbording/OnbordingPage';
import { DiamonContextProvider } from './Context/DiamonContext/DiamonContext';
import { ServerResponseProvider } from './Context/ServerResponseContext';
import { StreakContextProvider } from './Context/StreakContext/StreakContext';
import textSpeech from './text-speech';


import { firebaseConfig } from "./FirebaseConfig/fire-config";
import { initializeApp } from 'firebase/app';
import { CheckResponseContextProvider } from './Context/CheckResponseContext/CheckResponseContext';
import CongratulationPages from './finishSession/CongratulationPages/CongratulationPages';
import { FinishLessonStateContextProvider } from './Context/FinishLessonStateContext/FinishLessonStateContext';
setupIonicReact();

const initializeAdmob = async () => {
  await AdMob.initialize({
    initializeForTesting: false,
  });
};

const app = initializeApp(firebaseConfig);




const App: React.FC = () => {
  useEffect(() => {
    initializeAdmob();
  }, []);

  return (
    <IonApp>
      <FinishLessonStateContextProvider>
        <CheckResponseContextProvider>
          <StreakContextProvider>
            <ServerResponseProvider>
              <DiamonContextProvider>
                <IonReactRouter>
                  <AppWithTabs />
                </IonReactRouter>
              </DiamonContextProvider>
            </ServerResponseProvider>
          </StreakContextProvider>
        </CheckResponseContextProvider>
      </FinishLessonStateContextProvider>

    </IonApp>
  );
};

const AppWithTabs: React.FC = () => {
  const location = useLocation();

  const noTabsRoutes = [
    "/onbordingpage",
    "/courses",
    "/hub",
    "/testPage",
    "/tab2",
    "/congratulations"
  ];

  const hideTabs = noTabsRoutes.some(route => location.pathname.startsWith(route));


  // recuperation de si l user a deha vu l onbording page ou pas
  const haveSeen_Onbording = localStorage.getItem("haveSeen_onbordingPage");


  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/speech" component={textSpeech} />
        <Route exact path="/congratulations" component={CongratulationPages} />
        <Route exact path="/onbordingpage" component={OnbordingPage} />
        <Route exact path="/courses/:idParams" component={CoursesPages} />
        <Route exact path="/tab1" component={Tab1} />
        <Route exact path="/tab2" component={Tab2} />
        <Route path="/tab3" component={Tab3} />


        <Route exact path="/">
          <Redirect to="/tab2" />
        </Route>
        {/* redirecttion dynamique en fonction de si 
        l'user a deja vu l ' onbording page ou pas */}
        {/* {haveSeen_Onbording ? (
          <Route exact path="/">
            <Redirect to="/tab2" />
          </Route>
        )
          : (
            <Route exact path="/">
              <Redirect to="/onbordingpage" />
            </Route>
          )

        } */}
      </IonRouterOutlet>

      {!hideTabs && (
        <IonTabBar slot="bottom">
          {/* <IonTabButton tab="tab1" href="/tab1">
            <House />
            <IonLabel>Home</IonLabel>
          </IonTabButton> */}

          <IonTabButton tab="tab2" href="/tab2">
            <House />
            <IonLabel>Keyword</IonLabel>
          </IonTabButton>
        </IonTabBar>
      )}
    </IonTabs>
  );
};


export default App;
