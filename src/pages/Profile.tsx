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
    IonButtons,
    IonMenuButton
} from '@ionic/react';

import '../App.css';

const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard className="margin-1 border-solid-lightgray border-radius-04 box-shadow-none">
                    <img alt="player card" src="https://media.valorant-api.com/playercards/1c0a3c3b-40bd-ed6b-c374-e2887d8a16fe/wideart.png" />
                    <IonCardHeader>
                        <IonCardTitle>haru #wolf</IonCardTitle>
                        <IonCardSubtitle>Potato</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Here's a small text description for the card content. Nothing more, nothing less.
                    </IonCardContent>
                </IonCard>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Profile</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
