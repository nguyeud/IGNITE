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
    IonThumbnail,
    IonAvatar
} from '@ionic/react';

import Agent from "../components/Agent";

import { createStore, get } from '../services/IonicStorage';

import '../App.css';

const Agents: React.FC = () => {
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
            const passive = (item.abilities.find((o: { slot: string; }) => o.slot === 'Passive') == undefined) ? {
                "slot": "Passive",
                "displayName": null,
                "description": null,
                "displayIcon": null
            } :
                item.abilities.find((o: { slot: string; }) => o.slot === 'Passive');

            return (
                <IonItem key={item.uuid} id={item.uuid} button detail={true}>
                    <IonAvatar slot="start">
                        <img style={{backgroundColor: "#" + item.backgroundGradientColors[0]}} alt="agent display icon" src={item.displayIcon} />
                    </IonAvatar>
                    <IonLabel>
                        {item.displayName}
                    </IonLabel>
                    <Agent
                        uuid={item.uuid}
                        img={item.fullPortrait}
                        name={item.displayName}
                        description={item.description}
                        role={item.role}
                        ability1={item.abilities.find((o: { slot: string; }) => o.slot === 'Ability1')}
                        ability2={item.abilities.find((o: { slot: string; }) => o.slot === 'Ability2')}
                        ability3={item.abilities.find((o: { slot: string; }) => o.slot === 'Grenade')}
                        ultimate={item.abilities.find((o: { slot: string; }) => o.slot === 'Ultimate')}
                        passive={passive}
                        backgroundColors={item.backgroundGradientColors}
                        background={item.background}
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
                <IonList inset={true}>
                    {agentsData}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default React.memo(Agents);
