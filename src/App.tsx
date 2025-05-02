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
import KeyWordData from './keyWord/KeyWord';
import CoursesPages from './CoursesPages/CoursesPages';
import OnbordingPage from './Onbording/OnbordingPage';
import { DiamonContextProvider } from './Context/DiamonContext/DiamonContext';
import { ServerResponseProvider } from './Context/ServerResponseContext';

setupIonicReact();

const initializeAdmob = async () => {
  await AdMob.initialize({
    initializeForTesting: false,
  });
};

const hookUpServer = async () => {
  const response = await axios.post("https://fastenglishserver-chat.glitch.me/hookUpServer");
  console.log(response.data);
};

const testServer = async () => {
  const response = await axios.post("https://fastenglishserver-chat.glitch.me/hookUpServer");
  console.log(response.data);
};

const App: React.FC = () => {
  useEffect(() => {
    initializeAdmob();
    hookUpServer();
    testServer();
  }, []);

  return (
    <IonApp>
      <ServerResponseProvider>
        <DiamonContextProvider>
          <IonReactRouter>
            <AppWithTabs />
          </IonReactRouter>
        </DiamonContextProvider>
      </ServerResponseProvider>
    </IonApp>
  );
};

const AppWithTabs: React.FC = () => {
  const location = useLocation();

  const noTabsRoutes = [
    "/onbordingpage",
    "/courses"
  ];

  const hideTabs = noTabsRoutes.some(route => location.pathname.startsWith(route));

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/onbordingpage" component={OnbordingPage} />
        <Route exact path="/courses/:id" component={CoursesPages} />
        <Route exact path="/json" component={KeyWordData} />
        <Route exact path="/tab1" component={Tab1} />
        <Route exact path="/tab2" component={Tab2} />
        <Route path="/tab3" component={Tab3} />
        <Route exact path="/">
          <Redirect to="/tab2" />
        </Route>
      </IonRouterOutlet>

      {!hideTabs && (
        <IonTabBar slot="bottom">
          {/* <IonTabButton tab="tab2" href="/tab2">
            <House />
            <IonLabel>Keyword</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      )}
    </IonTabs>
  );
};

export default App;
