import React from 'react';
import {Platform } from 'react-native';
export const navigationRef = React.createRef();
export function navigate(name, params) {
  setTimeout(() => {
    navigationRef?.current?.navigate(name, params);
  }, 1000);
}
export const notificationOpen = async notification => {
  console.log(notification, 'LLLLLLLLLLL')
  const responseData = Platform.OS =='ios'? notification : JSON.parse(notification?.data?.response_data);
  const idFromResponseData = responseData?.id || notification?.id;
  console.log(idFromResponseData,'lll')
  if (idFromResponseData) {
    navigate('OrderDetail', { item: idFromResponseData });
  }
};
