import { useEffect, useState } from 'react';

import { useHistory } from "react-router";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonIcon,
  IonList
} from '@ionic/react';

import { personOutline, mapOutline, cutOutline, pricetagOutline } from 'ionicons/icons';

import Version from '../components/Version';

import { createStore, get, set, clear } from '../services/IonicStorage';
import { getVersion, getAgents, getMaps, getWeapons, getWeaponSkins } from '../services/VALORANT-API';

import '../App.css';

const Reference: React.FC = () => {
  const history = useHistory();

  const [version, setVersion] = useState<string>('');

  const APIKeys = ["version", "agents", "maps", "weapons", "weaponSkins"];
  const APIFetches = [getVersion(), getAgents(), getMaps(), getWeapons(), getWeaponSkins()];

  useEffect(() => {
    // Fetch API data
    const fetchAPIs = async () => {
      for (let i = 0; i < APIKeys.length; i++) {
        const exists = await get(APIKeys[i]);

        // If API data have never been fetched before or storage has been cleared
        // If API data exists in storage, then do not fetch it again
        // If data exists, but is outdated, then it will not be fetched until checkVersion() function is called to clear storage
        if (!exists) {
          const APIData = await APIFetches[i];
          set(APIKeys[i], APIData);
        }
      }

      // After all API data have been fetched, check if version is outdated
      checkVersion();
    }

    // Check database version vs API version
    const checkVersion = async () => {
      const currentVersion = await get("version");
      const fetchedVersion = await getVersion();

      // If current version in DB is different to fetched version, then clear the storage and fetch new data
      if (currentVersion !== fetchedVersion) {
        clear();
        fetchAPIs();
      }
    }

    // Set up Ionic Storage
    const setupStore = async () => {
      // Initialize/create DB
      await createStore("IGNITEDB");

      fetchAPIs();
    }

    const getVersionFromDB = async () => {
      const version = await get("version");
      setVersion(version);
    }

    setupStore();
    getVersionFromDB();
  });

  const index = [0, 1, 2, 3];
  const pages = ["/Agents", "/Maps", "/Maps", "/Maps"];
  const pageLabels = ["Agents", "Maps", "Weapons", "Weapons Skins"];
  const icons = [personOutline, mapOutline, cutOutline, pricetagOutline];

  const listItems = index.map(index => {
    return (
      <IonItem key={pageLabels[index]} button detail={true} onClick={() => history.push(pages[index])}>
        <IonIcon className="list-icon" icon={icons[index]} />
        <IonLabel>{pageLabels[index]}</IonLabel>
      </IonItem>
    );
  });

  return (
    <IonPage id="main-content">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Reference</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList inset={true}>
          {listItems}
        </IonList>
        <Version version={version} />
      </IonContent>
    </IonPage>
  );
};

export default Reference;
