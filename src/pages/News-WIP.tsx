import { useEffect, useState } from 'react';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonSpinner,
  IonIcon,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption
} from '@ionic/react';

import {
  refresh
} from 'ionicons/icons';

import { getNews } from '../services/Henrik-3-API';

import moment from 'moment';

const News: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [filteredNews, setFilteredNews] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (filter === '') {
      getNewsData();
    } else if (filter !== '') {
      getFilteredNewsData(filter);
    }
    setIsRefreshing(false);
  }, [filter, isRefreshing]);

  const uid = function () {
    return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36);
  }

  const refreshNewsData = () => {
    setIsRefreshing(true);
  }

  const getNewsData = () => getNews()
    .then(response => {
      setIsLoading(true);
      setNews(response.data)
      setIsLoading(false);
    })
    .catch((err) => {
      setError(err);
      console.log(error);
      setIsLoading(false);
    })

  const getFilteredNewsData = (category: string) => {
    setFilter(category);
    if (filter !== '') {
      const filteredNews = news.filter((item) => {
        return item.category === filter;
      })
      setFilteredNews(filteredNews);
    }
  }

  const newsItems = ((filter === '') ? news : filteredNews).map(item => {
    const category = item.category.replace("_", " ").toUpperCase();
    const date = moment.utc(item.date).format('MM-DD-YY')
    const link = (item.external_link == null) ? item.url : item.external_link;
    return <IonCard key={uid()}>
      <img src={item.banner_url} />
      <IonCardHeader>
        <IonCardTitle>{item.title}</IonCardTitle>
        <IonCardSubtitle>{category} // {date}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonButton href={link} target="_blank">View</IonButton>
      </IonCardContent>
    </IonCard>
  });

  const renderPageSpinner = (
    <div className="container">
      <IonSpinner name="lines" id="spinner-content"></IonSpinner>
    </div>
  );

  const renderPageContent = (
    <IonContent fullscreen>
      <IonList>
        <IonItem>
          <IonSelect interface="action-sheet" placeholder="Select news filter" onIonChange={(e) => getFilteredNewsData(e.detail.value)}>
            <IonSelectOption value=""></IonSelectOption>
            <IonSelectOption value="announcements">Announcements</IonSelectOption>
            <IonSelectOption value="dev">Developer</IonSelectOption>
            <IonSelectOption value="esports">E-Sports</IonSelectOption>
            <IonSelectOption value="game_updates">Game Updates</IonSelectOption>
            <IonSelectOption value="patch_notes">Patch Notes</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
      {newsItems}
    </IonContent>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="end" fill="clear" onClick={refreshNewsData}>
            <IonIcon slot="icon-only" icon={refresh}></IonIcon>
          </IonButton>
          <IonTitle>News</IonTitle>
        </IonToolbar>
      </IonHeader>
      {isLoading ? renderPageSpinner : renderPageContent}
    </IonPage>
  );
};

export default News;
