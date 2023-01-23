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
            const imgStyle = {
                backgroundColor: "#" + item.backgroundGradientColors[0],
            };

            const ability1 = item.abilities[0];
            const ability2 = item.abilities[0];
            const grenade = item.abilities[0];
            const ultimate = item.abilities[0];
            const passive = item.abilities[0];

            return (
                <IonItem key={item.uuid} id={item.uuid} button detail={true}>
                    <IonThumbnail className="margin-vertical-06 margin-right-1" slot="start">
                        <img className="border-solid-lightgray border-radius-circle" style={imgStyle} alt="agent display icon" src={item.displayIcon} />
                    </IonThumbnail>
                    <IonLabel>
                        {item.displayName}
                    </IonLabel>
                    <Agent
                        uuid={item.uuid}
                        img={item.fullPortrait}
                        name={item.displayName}
                        description={item.description}
                        role={item.role}
                        ability1={item.abilities[0]}
                        ability2={item.abilities[1]}
                        ability3={item.abilities[2]}
                        ultimate={item.abilities[3]}
                        passive={passive}
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
                <IonList className="border-radius-04" inset={true}>
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
