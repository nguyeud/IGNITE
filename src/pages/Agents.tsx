import React from "react";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton
} from '@ionic/react';
import '../App.css';

const Agents: React.FC<any> = (props) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Reference" />
                    </IonButtons>
                    <IonTitle>Agents</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Agents</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
            Hello, world!
        </IonPage>
    );
};

export default React.memo(Agents);
