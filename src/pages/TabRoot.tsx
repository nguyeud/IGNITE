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

import { personOutline, playOutline, newspaperOutline, albumsOutline, cogOutline } from 'ionicons/icons';

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
                        <IonIcon icon={personOutline} />
                        <IonLabel>Profile</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Career" href="/Career">
                        <IonIcon icon={playOutline} />
                        <IonLabel>Career</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="News" href="/News">
                        <IonIcon icon={newspaperOutline} />
                        <IonLabel>News</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Reference" href="/Reference">
                        <IonIcon icon={albumsOutline} />
                        <IonLabel>Reference</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Settings" href="/Settings">
                        <IonIcon icon={cogOutline} />
                        <IonLabel>Settings</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonPage>
    );
};

export default TabRoot;