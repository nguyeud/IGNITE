import React, { useRef, useState, useEffect } from 'react';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonModal,
  IonButton,
  IonSegment,
  IonSegmentButton
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
  backgroundColors: ["color1", "color2", "color3", "color4"],
  background: string
}

const Agent: React.FC<AgentData> = (props: AgentData) => {
  const modal = useRef<HTMLIonModalElement>(null);

  const [ability, setAbility] = useState<string | undefined>('');

  const abilityList = [props.ability1, props.ability2, props.ability3, props.ultimate, props.passive];

  const renderAbilityList = abilityList.map(item => {
    if (item.displayName !== null) {
      const icon = 
        (item.displayIcon === null) ? 
          "P" : 
          <img alt="agent ability" style={{ width: '1.4rem' }} src={item.displayIcon} />;
      return (
        <IonSegmentButton key={item.slot} value={item.slot}>
          {icon}
        </IonSegmentButton>
      );
    }
  });

  const renderAbility = abilityList.map(item => {
    if (ability === item.slot) {
      return (
        <div key={item.slot}>
          <p className="text-subtitle">{item.displayName}</p>
          <p className="text-normal">{item.description}</p>
        </div>
      );
    }
  })

  return (
    <IonModal ref={modal} trigger={props.uuid}>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          {/* <IonTitle>{props.name}</IonTitle> */}
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss()}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div id="agent-img" className="container-img">
          <div
            style={{
              background: `url(${props.background}), linear-gradient(${"#" + props.backgroundColors[0]}, ${"#" + props.backgroundColors[1]})`,
              backgroundPosition: 'center center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              borderRadius: '.4rem'
            }}>
            <img className="img-text-agent" alt="agent portrait" src={props.img} />
          </div>
        </div>
        <div id="agent-info" className="container-text">
          <h4 className="text-title">{props.name}</h4>
          <p className="text-subtitle">{props.role.displayName}</p>
          <p className="text-normal">{props.description}</p>
        </div>
        <div id="agent-abilities"className="container-text">
          <h4 className="text-title">Abilities</h4>
          <IonSegment scrollable={true} onIonChange={(e) => setAbility(e.detail.value)}>
            {renderAbilityList}
          </IonSegment>
          {renderAbility}
        </div>
      </IonContent>
    </IonModal>
  );
};

export default Agent;