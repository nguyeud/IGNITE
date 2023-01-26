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
    IonThumbnail,
    IonLabel,
    IonList
} from '@ionic/react';

import Map from "../components/Map";

import { createStore, get } from '../services/IonicStorage';

import '../App.css';

const Maps: React.FC = () => {
    const [maps, setMaps] = useState<any[]>([]);

    useEffect(() => {
        const setupStore = async () => {
            await createStore("IGNITEDB");
            getAgentsFromDB();
        }

        const getAgentsFromDB = async () => {
            const maps = await get("maps");
            setMaps(maps);
        }

        setupStore();
    }, []);

    maps.sort(function (a, b) {
        return a.displayName.localeCompare(b.displayName);
    });

    const mapsData = maps.map(item => {
        return (
            <IonItem key={item.uuid} id={item.uuid} button detail={true}>
                <IonThumbnail slot="start">
                    <img className="list-thumbnail" alt="map splash" src={item.splash} />
                </IonThumbnail>
                <IonLabel>
                    {item.displayName}
                </IonLabel>
                <Map
                        uuid={item.uuid}
                        name={item.displayName}
                        coords={item.coordinates}
                        imgSplash={item.splash}
                        imgMap={item.displayIcon}
                    />
            </IonItem>
        );

    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Reference" />
                    </IonButtons>
                    <IonTitle>Maps</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList inset={true}>
                    {mapsData}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default React.memo(Maps);;
