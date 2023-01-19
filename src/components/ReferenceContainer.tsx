import { useHistory } from "react-router";

import {
    IonItem,
    IonLabel,
    IonList,
} from '@ionic/react';

interface ContainerProps { }

const ReferenceContainer: React.FC<ContainerProps> = () => {
    const history = useHistory();

    return (
        <IonList className="margin-md border-md" inset={true}>
            <IonItem button detail={true}>
                <IonLabel onClick={() => history.push("/Agents")}>
                    <p>Agents</p>
                </IonLabel>
            </IonItem>
            <IonItem button detail={true}>
                <IonLabel onClick={() => history.push("/Maps")}>
                    <p>Maps</p>
                </IonLabel>
            </IonItem>
            <IonItem button detail={true}>
                <IonLabel onClick={() => history.push("/Maps")}>
                    <p>Weapons</p>
                </IonLabel>
            </IonItem>
            <IonItem button detail={true}>
                <IonLabel onClick={() => history.push("/Maps")}>
                    <p>Weapon Skins</p>
                </IonLabel>
            </IonItem>
        </IonList>
    );
};

export default ReferenceContainer;