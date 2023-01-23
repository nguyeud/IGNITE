import { useHistory } from "react-router";

import React, { useEffect, useState } from 'react';

import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail
} from '@ionic/react';

import Agent from "../components/Agent";

import { createStore, get } from '../services/IonicStorage';

import '../App.css';

const Agents: React.FC = () => {
    const history = useHistory();

    const [agents, setAgents] = useState<any[]>([]);

    useEffect(() => {
        const setupStore = async () => {
            await createStore("IGNITEDB");
            getAgentsFromDB();
        }

        const getAgentsFromDB = async () => {
            const agents = await get("agents");
            setAgents(agents);
        }

        setupStore();
    }, []);

    agents.sort(function (a, b) {
        return a.displayName.localeCompare(b.displayName);
    });

    const agentsData = agents.map(item => {
        if (item.isPlayableCharacter === true) {
          return (
            <IonItem key={item.uuid} id={item.uuid} button detail={true}>
              <IonThumbnail slot="start" className="list-thumbnail">
                <img className="list-thumbnail-img" alt="agent display icon" src={item.displayIcon} />
              </IonThumbnail>
              <IonLabel className="label-list" padding-vertical>
                {item.displayName}
              </IonLabel>
              <Agent
                uuid={item.uuid} 
                img={item.fullPortrait}
                name={item.displayName}
                description={item.description}
                role={item.role}
                abilities={item.abilities}
                backgroundColors={item.backgroundGradientColors}
              />
            </IonItem>
          );
        }
      });

    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Reference" />
                    </IonButtons>
                    <IonTitle>Agents</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList className="border-radius-md" inset={true}>
                    {agentsData}
                </IonList>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Agents</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    );
};

export default React.memo(Agents);
