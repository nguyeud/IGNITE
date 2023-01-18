import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import { createStore, get, set } from '../services/IonicStorage';
import { getVersion } from '../services/Version';

const Reference: React.FC = () => {
  useEffect (() => {
    const setupStore = async () => {
      // Initialize/create DB
			await createStore("ValorantDB");

      // Initialize variable exists to see if it exists in storage
			const exists = await get("version");

      // If version does not exists
			if (!exists) {
				const version = getVersion(); // Get latest version
				set("version", version);  // Set version to DB
			} else {  // If version exists
        const version = await getVersion(); // Get latest version
        if (exists !== version) { // If version is different
          console.log("Version changed. Assests need updated.");
        } else {
          console.log("Version is up to date.");
        }
      }
		}

		setupStore();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reference</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reference</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Reference;
