import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

// Request Permission for Notifications
async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Notification permission granted.');
    }
}

// Get Firebase Token
async function getToken() {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
}

// Listen for Foreground Notifications
function onMessageListener() {
    messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
}

export { requestUserPermission, getToken, onMessageListener };
