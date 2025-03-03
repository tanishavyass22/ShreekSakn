// import React, { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Provider, useSelector } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './Redux/Store';
// import SplashScreen from 'react-native-splash-screen';
// import { StatusBar, Text, View } from 'react-native';
// import AuthStack from './Navigation/AuthStack';
// import BottomTabNavigator from './Navigation/BottomNavigator';
// import RootStack from './Navigation/RootStack';
// import { messaging } from '@react-native-firebase/messaging';
// import { localNotificationService } from './Notifications/LocalNotificationService';
// import { fcmService } from './Notifications/FMCService';
// // import PushNotification from 'react-native-push-notification';
// import { PermissionsAndroid, Platform } from "react-native";

// const Stack = createStackNavigator();
// const MainNavigator = () => {
//   const { isLoggedIn } = useSelector((state) => state.user);
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
//       {!isLoggedIn ? (
//         <Stack.Screen name="AuthStack" component={AuthStack} />
//       ) : (
//         <Stack.Screen name="RootStack" component={RootStack} />
//       )}
//     </Stack.Navigator>
//   );
// };
// export default function App() {

//   const getToken = async () => {
//     try {
//       const token = await messaging().getToken();
//       if (token) {
//         console.log('FCM Token:', token);
//         return token;
//       }
//     } catch (error) {
//       console.log('Error fetching FCM token:', error);
//     }
//   };
//   const requestNotificationPermission = async () => {
//     if (Platform.OS === "android" && Platform.Version >= 33) {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
//       );
//       console.log("Notification Permission:", granted);
//     }
//   };
//   useEffect(() => {
//     requestNotificationPermission();
//     getToken();
//     setTimeout(() => {
//       SplashScreen.hide();
//     }, 1500);
//     fcmService.register();
//     fcmService.createNotificationListeners();
//     localNotificationService.configure();
//     return () => {
//        fcmService.unRegister();
//     }
//   }, []);
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <NavigationContainer>
//           <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
//           <MainNavigator />
//         </NavigationContainer>
//       </PersistGate>
//     </Provider>
//   );
// }

//push notifications
// import React, { useEffect } from 'react';
// import { View, Button, PermissionsAndroid, Platform } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// import { messaging } from '@react-native-firebase/messaging';
// import { localNotificationService } from './Notifications/LocalNotificationService';
// import { fcmService } from './Notifications/FMCService';
// import PushNotification from 'react-native-push-notification';
// const App = () => {
//   const getToken = async () => {
//     try {
//       const token = await messaging().getToken();
//       if (token) {
//         console.log('FCM Token:', token);
//       }
//     } catch (error) {
//       console.log('Error fetching FCM token:', error);
//     }
//   };
//   const handleLocalNotification = () => {
//     console.log("Triggering Local Notification");
//     PushNotification.localNotification({
//       channelId: "channel-id",
//       title: "Local Notification",
//       message: "HELLO I AM A LOCAL NOTIFICATION",
//       playSound: true,
//       soundName: "default",
//       number: 1,
//     });
//   };
//   const requestNotificationPermission = async () => {
//     if (Platform.OS === "android" && Platform.Version >= 33) {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
//       );
//       console.log("Notification Permission:", granted);
//     }
//   };
//   useEffect(() => {
//     requestNotificationPermission();
//     getToken();
//     setTimeout(() => {
//       SplashScreen.hide();
//     }, 1500);
//     fcmService.register();
//     return () => {
//       fcmService.unRegister();
//     };
//   }, []);
//   return (
//     <View style={{ flex: 1, backgroundColor: 'white' }}>
//       <View style={{ width: 200, height: 100, alignSelf: 'center', marginTop: 350 }}>
//         <Button title='Press me to get a notification' onPress={handleLocalNotification} />
//       </View>
//     </View>
//   );
// };
// export default App;

// Fetch Api
// import React, { useEffect, useState } from "react";
// import { View, Text, ActivityIndicator, FlatList, StyleSheet } from "react-native";
// import { MyFetchGetRequest, MyFetchPostRequest , MyFetchPutRequest, MyFetchPatchRequest, MyFetchDeleteRequest} from "./MyFetchApiRequests";
// const App = () => {
//   //const [data, setData] = useState([]);
//   //const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     //getData();
//     //PostData();
//     //putData();
//     //patchData();
//     deleteData();
//   }, []);

//   const deleteData = async ()=>{
//     const res = await MyFetchDeleteRequest(1);
//     console.log('data', res)
//   }
//   // const patchData = async ()=>{
//   //   const data = {
//   //     title:'tanisha',
//   //     //body:'vyassssss',
//   //     userId:1
//   //   }
//   //   const res = await MyFetchPatchRequest(1,data);
//   //   console.log('data', res)
//   // }
//   // const putData = async ()=>{
//   //   const data = {
//   //     title:'vvsbvxyhsba',
//   //     body:'babdecubsuenueshfub',
//   //     userId:1
//   //   }
//   //   const res = await MyFetchPutRequest(1,data);
//   //   console.log('data', res)
//   // }
//   // const PostData = async () => {
//   //   const res = await MyFetchPostRequest({
//   //     title:'hello',
//   //     body:'world',
//   //     userId: 2
//   //   });
//   //   console.log('data', res)
//   // };

//   // const getData = async () => {
//   //   try {
//   //     const res = await MyFetchGetRequest();
//   //     setData(res);
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   return (
//     <View>
//       <Text>Fetch Api</Text>
//     </View>
//     // <View style={styles.container}>
//     //   {loading ? (
//     //     <ActivityIndicator size="large" color="blue" />
//     //   ) : (
//     //     <FlatList
//     //       data={data}
//     //       keyExtractor={(item) => item.id.toString()}
//     //       renderItem={({ item }) => (
//     //         <View style={styles.itemContainer}>
//     //           <Text style={styles.title}>{item.title}</Text>
//     //           <Text style={styles.body}>{item.body}</Text>
//     //         </View>
//     //       )}
//     //     />
//     //   )}
//     // </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#f8f8f8",
//   },
//   itemContainer: {
//     backgroundColor: "#fff",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     elevation: 2, // For shadow effect in Android
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   body: {
//     fontSize: 14,
//     color: "#555",
//     marginTop: 5,
//   },
// });
// export default App;

// import React, { useState } from "react";
// import { View, Text, ActivityIndicator, FlatList, StyleSheet, Button } from "react-native";
// import { MyFetchGetRequest, MyFetchPostRequest, MyFetchPutRequest, MyFetchPatchRequest, MyFetchDeleteRequest } from "./MyFetchApiRequests";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const getData = async () => {
//     setLoading(true);
//     try {
//       const res = await MyFetchGetRequest();
//       console.log("data", res)
//       setData(res);
//       setMessage("Fetched Data Successfully");
//     } catch (error) {
//       setMessage("Error Fetching Data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const postData = async () => {
//     setLoading(true);
//     try {
//       const res = await MyFetchPostRequest({
//         title: "hello",
//         body: "world",
//         userId: 2,
//       });
//       setMessage(`Posted Data: ${JSON.stringify(res)}`);
//     } catch (error) {
//       setMessage("Error Posting Data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const putData = async () => {
//     setLoading(true);
//     try {
//       const res = await MyFetchPutRequest(1, {
//         title: "Updated Title",
//         body: "Updated Body",
//         userId: 1,
//       });
//       setMessage(`Put Data: ${JSON.stringify(res)}`);
//     } catch (error) {
//       setMessage("Error Updating Data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const patchData = async () => {
//     setLoading(true);
//     try {
//       const res = await MyFetchPatchRequest(1, { title: "Patched Title", userId: 1 });
//       setMessage(`Patched Data: ${JSON.stringify(res)}`);
//     } catch (error) {
//       setMessage("Error Patching Data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteData = async () => {
//     setLoading(true);
//     try {
//       const res = await MyFetchDeleteRequest(1);
//       setMessage(`Deleted Data Response: ${JSON.stringify(res)}`);
//     } catch (error) {
//       setMessage("Error Deleting Data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Fetch API Example</Text>
//       <Button title="Get Data" onPress={getData} />
//       <Button title="Post Data" onPress={postData} />
//       <Button title="Put Data" onPress={putData} />
//       <Button title="Patch Data" onPress={patchData} />
//       <Button title="Delete Data" onPress={deleteData} />
//       {loading && <ActivityIndicator size="large" color="blue" />}
//       {message ? <Text style={styles.message}>{message}</Text> : null}
//       <FlatList data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.body}>{item.body}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f8f8f8",
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   message: {
//     fontSize: 16,
//     color: "green",
//     marginVertical: 10,
//     textAlign: "center",
//   },
//   itemContainer: {
//     backgroundColor: "#fff",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   body: {
//     fontSize: 14,
//     color: "#555",
//     marginTop: 5,
//   },
// });
// export default App;

//AXIOS API
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {MyAxiosGetRequest, MyAxiosPostRequest, MyAxiosPutRequest, MyAxiosPatchRequest, MyAxiosDeleteRequest} from './AxiosApiRequests';

const App = () => {

  useEffect(() => {
    //getData();
    //postData();
    //putData();
    //patchData()
    DeleteData();
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  const DeleteData = async () => {
    try {
      const res = await MyAxiosDeleteRequest(10);
      //console.log(res);
      console.log('Response data: ', res.data)
      console.log('Response status: ', res.status)
    } catch (error) {
      console.log('Error fetching data: ', error)
    }
  };
  // const patchData = async () => {
  //   try {
  //     const res = await MyAxiosPatchRequest(10,{
  //       title:"hello",
  //       //body:"world",
  //       //id:105
  //     });
  //     //console.log(res);
  //     console.log(res.data);
  //     console.log(res.status)
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // };
  // const putData = async () => {
  //   try {
  //     const res = await MyAxiosPutRequest(10,{
  //       title:"hello",
  //       //body:"world",
  //       //id:105
  //     });
  //     //console.log(res);
  //     console.log(res.data);
  //     console.log(res.status)
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // };
  // const postData = async () => {
  //   try {
  //     const res = await MyAxiosPostRequest({
  //       title:"hello",
  //       body:"world",
  //       id:101
  //     });
  //     //console.log(res);
  //     console.log(res.data);
  //     console.log(res.status)
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // };
  // const getData = async () => {
  //   try {
  //     const res = await MyAxiosGetRequest();
  //     //console.log(res);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // };

  return (
    <View>
      <Text>AXIOS API EXAMPLE</Text>
    </View>
  );
};
export default App
