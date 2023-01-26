import React, { useRef, useState } from 'react';

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

interface MapData {
  uuid: string,
  name: string,
  coords: string,
  imgSplash: string,
  imgMap: string
}

const Map: React.FC<MapData> = (props: MapData) => {
  const modal = useRef<HTMLIonModalElement>(null);

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
        <div id="map-splash" className="container-img">
            <img className="img-text-rectangle" alt="map splash" src={props.imgSplash} />
        </div>
        <div id="map-info" className="container-text">
          <h4 className="text-title">{props.name}</h4>
          <p className="text-subtitle">{props.coords}</p>
        </div>
        <div id="map-callouts"className="container-img">
          <img className="img-text-rectangle" alt="map callouts" src={props.imgMap} />
        </div>
      </IonContent>
    </IonModal>
  );
};

export default Map;