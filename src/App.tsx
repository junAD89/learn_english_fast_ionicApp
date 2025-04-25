import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { AdMob } from "@capacitor-community/admob";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

import '@ionic/react/css/palettes/dark.class.css';
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { House, User } from 'lucide-react';
import { DiamonContextProvider } from './Context/DiamonContext/DiamonContext';
import { ServerResponseProvider } from './Context/ServerResponseContext';
import { useEffect } from 'react';

setupIonicReact();

const initializeAdmob = async () => {
  await AdMob.initialize({
    initializeForTesting: false,
  });
};

const App: React.FC = () => {
  useEffect(() => {
    initializeAdmob();
  }, []);

  return (
    <IonApp>
      <ServerResponseProvider>
        <DiamonContextProvider>
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/tab1">
                  <Tab1 />
                </Route>
                <Route exact path="/tab2">
                  <Tab2 />
                </Route>
                <Route path="/tab3">
                  <Tab3 />
                </Route>
                <Route exact path="/">
                  <Redirect to="/tab2" />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                {/* <IonTabButton className='not_important_tab' tab="tab1" href="/tab1">
                  <IonIcon aria-hidden="true" icon={triangle} />
                </IonTabButton> */}
                <IonTabButton tab="tab2" href="/tab2">
                  <House />
                  <IonLabel>Keyword</IonLabel>
                </IonTabButton>
                {/* <IonTabButton className='not_important_tab' tab="tab3" href="/tab3">
                  <User />
                </IonTabButton> */}
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        </DiamonContextProvider>
      </ServerResponseProvider>
    </IonApp>
  );
};

export default App;