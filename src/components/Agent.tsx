import React, { useRef, useState, useEffect } from 'react';

import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonItem,
    IonModal,
    IonButton
} from '@ionic/react';

interface AgentData {
  uuid: string,
  img: string,
  name: string,
  description: string,
  role: Array<Object>,
  abilities: Array<Object>,
  backgroundColors: Array<string>
}

const Agent: React.FC<AgentData> = ({uuid, img, name, description, role, abilities, backgroundColors}) => {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
      <IonModal ref={modal} trigger={uuid}>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonTitle>{name}</IonTitle>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          Hello!
        </IonContent>
      </IonModal>
  );
};

export default Agent;