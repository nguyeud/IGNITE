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
import { person, play, newspaper, albums, cog } from 'ionicons/icons';
import Profile from './pages/Profile';
// import Career from './pages/Career';
// import News from './pages/News';
import Reference from './pages/Reference';
// import Settings from './pages/Settings';
import './App.css';

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

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/Reference">
            <Reference />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Redirect to="/Profile" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon icon={play} />
            <IonLabel>Career</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon icon={newspaper} />
            <IonLabel>News</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Reference" href="/Reference">
            <IonIcon icon={albums} />
            <IonLabel>Reference</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon icon={cog} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
