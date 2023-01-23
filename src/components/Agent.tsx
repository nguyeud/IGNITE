import React, { useRef } from 'react';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonModal,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonSegment,
  IonSegmentButton,
  IonLabel
} from '@ionic/react';

interface AgentData {
  uuid: string,
  img: string,
  name: string,
  description: string,
  role: {
    uuid: string,
    displayName: string,
    description: string,
    displayIcon: string,
    assetPath: string
  },
  ability1: {
    slot: string,
    displayName: string,
    description: string,
    displayIcon: string,
  },
  ability2: {
    slot: string,
    displayName: string,
    description: string,
    displayIcon: string,
  },
  ability3: {
    slot: string,
    displayName: string,
    description: string,
    displayIcon: string,
  },
  ultimate: {
    slot: string,
    displayName: string,
    description: string,
    displayIcon: string,
  },
  passive: {
    slot: string,
    displayName: string,
    description: string,
    displayIcon: string,
  },
  backgroundColors: ["color1", "color2", "color3", "color4"]
}

const Agent: React.FC<AgentData> = (props: AgentData) => {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <IonModal ref={modal} trigger={props.uuid}>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>{props.name}</IonTitle>
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss()}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img alt="agent portrait" src={props.img} />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{props.name}</IonCardTitle>
            <h4>{props.name}</h4>
            <IonCardSubtitle>{props.role.displayName}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            {props.description}
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Abilities</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonSegment value="ability 1">
              <IonSegmentButton value="ability 1">
                <IonLabel><img className="card-segment-img" alt="ability 1" src={props.ability1.displayIcon} /></IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="ability 2">
                <IonLabel><img className="card-segment-img" alt="ability 2" src={props.ability2.displayIcon} /></IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="ability 3">
                <IonLabel><img className="card-segment-img" alt="ability 3" src={props.ability3.displayIcon} /></IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="ability 4">
                <IonLabel><img className="card-segment-img" alt="ultimate" src={props.ultimate.displayIcon} /></IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonCardContent>
        </IonCard>
        <IonSegment className="card-segment" value="ability 1">
          <IonSegmentButton value="ability 1">
            <IonLabel><img className="card-segment-img" alt="ability 1" src={props.ability1.displayIcon} /></IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="ability 2">
            <IonLabel><img className="card-segment-img" alt="ability 2" src={props.ability2.displayIcon} /></IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="ability 3">
            <IonLabel><img className="card-segment-img" alt="ability 3" src={props.ability3.displayIcon} /></IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="ability 4">
            <IonLabel><img className="card-segment-img" alt="ultimate" src={props.ultimate.displayIcon} /></IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonContent>
    </IonModal>
  );
};

export default Agent;