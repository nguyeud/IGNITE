import { Redirect, Route } from 'react-router-dom';
import {
    IonPage,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';

import { person, play, newspaper, albums, cog } from 'ionicons/icons';

import Profile from './Profile';
import Career from './Career';
import News from './News';
import Reference from './Reference';
import Settings from './Settings';

import Agents from '../pages/Agents';
import Maps from '../pages/Maps';

import '../App.css';

interface IAppProps { }

const TabRoot: React.FC<IAppProps> = props => {
    return (
        <IonPage>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/Profile" component={Profile} />
                    <Route exact path="/Career" component={Career} />
                    <Route exact path="/News" component={News} />
                    <Route exact path="/Reference" component={Reference} />
                    <Route exact path="/Agents" component={Agents} />
                    <Route exact path="/Maps" component={Maps} />
                    <Route exact path="/Settings" component={Settings} />
                    <Route exact path="/" render={() => <Redirect to="/Profile" />} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="Profile" href="/Profile">
                        <IonIcon icon={person} />
                        <IonLabel className="label-tab">Profile</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Career" href="/Career">
                        <IonIcon icon={play} />
                        <IonLabel className="label-tab">Career</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="News" href="/News">
                        <IonIcon icon={newspaper} />
                        <IonLabel className="label-tab">News</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Reference" href="/Reference">
                        <IonIcon icon={albums} />
                        <IonLabel className="label-tab">Reference</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Settings" href="/Settings">
                        <IonIcon icon={cog} />
                        <IonLabel className="label-tab">Settings</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonPage>
    );
};

export default TabRoot;