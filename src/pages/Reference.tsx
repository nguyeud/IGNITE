import { useEffect } from 'react';
import {
  IonNav
} from '@ionic/react';
import '../App.css';
import ReferenceContainer from '../components/ReferenceContainer';
import { createStore, get, set, clear } from '../services/IonicStorage';
import { getVersion, getAgents, getMaps, getWeapons, getWeaponSkins } from '../services/VALORANT-API';

const Reference: React.FC = () => {
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

    setupStore();
  }, []);

  return (
    <IonNav root={() => <ReferenceContainer />}></IonNav>
  );
};

export default Reference;
