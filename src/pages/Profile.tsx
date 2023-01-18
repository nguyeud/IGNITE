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
    IonCardTitle
} from '@ionic/react';

const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <img alt="player card" src="https://media.valorant-api.com/playercards/1c0a3c3b-40bd-ed6b-c374-e2887d8a16fe/wideart.png" />
                    <IonCardHeader>
                        <IonCardTitle>haru #wolf</IonCardTitle>
                        <IonCardSubtitle>Potato</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Here's a small text description for the card content. Nothing more, nothing less.
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Profile;