import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import * as LiveUpdates from '@capacitor/live-updates';

const Tab3: React.FC = () => {






  const checkUpdate = async () => {
    try {
      const result = await LiveUpdates.sync();
      console.log('Live update result:', result);
      alert('Update status: ' + (result as any).status);

    } catch (err) {
      console.error('Live update error:', err);
      alert('Erreur Live Update');
    }
  };








  return (
    <IonPage>
      <h1>
        Avant le Appflow
        apres le Appflow
      </h1>

      <button onClick={checkUpdate}>
        Tester mise à jour
      </button>
    </IonPage>
  );
};

export default Tab3;
