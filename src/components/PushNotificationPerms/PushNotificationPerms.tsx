import { ActionPerformed, PushNotifications, PushNotificationSchema, Token } from "@capacitor/push-notifications"
import { IonButton, IonCard, IonHeader, IonPage } from "@ionic/react";


import './PushNotificationPerms.css'
const PushNotificationPerms = () => {

    const initPushNotifications = async () => {
        const permition = await PushNotifications.requestPermissions();

        if (permition.receive === "granted") {
            await PushNotifications.register();
        }
    };

    const addListeners = () => {
        // Quand l'enregistrement réussit
        PushNotifications.addListener('registration', (token: Token) => {
            console.log('Token push: ' + token.value);
            // Envoyez ce token à votre serveur backend
        });

        // En cas d'erreur
        PushNotifications.addListener('registrationError', (error: any) => {
            console.log('Erreur: ' + JSON.stringify(error));
        });

        // Quand une notification est reçue
        PushNotifications.addListener('pushNotificationReceived',
            (notification: PushNotificationSchema) => {
                console.log('Notification reçue: ' + JSON.stringify(notification));
            }
        );

        // Quand l'utilisateur clique sur une notification
        PushNotifications.addListener('pushNotificationActionPerformed',
            (action: ActionPerformed) => {
                console.log('Action effectuée: ' + JSON.stringify(action));
            }
        );
    };



    return (
        <IonPage>
            <IonHeader>
                <IonCard>
                    On veut te rapeller de t'entrainer !
                </IonCard>
            </IonHeader>

            <IonButton
                onClick={() => {
                    initPushNotifications();
                    addListeners();
                }}
            >
                Activer les notifications
            </IonButton>
        </IonPage>
    )
}

export default PushNotificationPerms;