import { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonNavLink
} from '@ionic/react';
import '../App.css';
import { get } from '../services/IonicStorage';
import Agents from '../pages/Agents';
import Maps from '../pages/Maps';

function ReferenceContainer() {
  const [version, setVersion] = useState<string>('');

  useEffect(() => {
    const getVersionFromDB = async () => {
      const version = await get("version");
      setVersion(version);
    }

    getVersionFromDB();
  }, []);

  const versionContent = <div className="content-container"><p className="info-text"><b>Version</b> {version}</p></div>;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reference</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList inset={true}>
          <IonItem button detail={true}>
            <IonLabel>
              <IonNavLink routerDirection="forward" component={() => <Agents />}>
                <p>Agents</p>
              </IonNavLink>
            </IonLabel>
          </IonItem>
          <IonItem button detail={true}>
            <IonLabel>
              <IonNavLink routerDirection="forward" component={() => <Maps />}>
                <p>Maps</p>
              </IonNavLink>
            </IonLabel>
          </IonItem>
          <IonItem button detail={true}>
            <IonLabel>
              <IonNavLink routerDirection="forward" component={() => <Maps />}>
                <p>Weapons</p>
              </IonNavLink>
            </IonLabel>
          </IonItem>
          <IonItem button detail={true}>
            <IonLabel>
              <IonNavLink routerDirection="forward" component={() => <Maps />}>
                <p>Weapon Skins</p>
              </IonNavLink>
            </IonLabel>
          </IonItem>
        </IonList>
        {versionContent}
      </IonContent>
    </IonPage>
  );
};

export default ReferenceContainer;