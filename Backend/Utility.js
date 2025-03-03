import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert, Dimensions, PermissionsAndroid, Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {ToastMsg} from '../Component/UI/SimpleTost';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Geolocation from '@react-native-community/geolocation';
import {useEffect} from 'react';

export const isIos = Platform.OS === 'ios';

export const DATE_FORMATE = 'YYYY-MM-DD';

export const CURRENCY = '$';

export const RFV = e => {
  return e;
};

export const regex = {
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  phoneNumber: /^(0|[1-9][0-9]*)$/,
};

export const DefaultToast = title => {
  return Toast.show(title, Toast.SHORT);
};

export const formatError = obj => {
  let errorsData = {};
  for (const field in obj) {
    if (Object.hasOwnProperty.call(obj, field)) {
      errorsData[field] = '';
    }
  }
  return errorsData;
};

export const parseValues = data => {
  let parsedData = {};
  for (const field in data) {
    if (Object.hasOwnProperty.call(data, field)) {
      const value = data[field].value;
      parsedData[field] = value;
    }
  }
  return parsedData;
};

export const isValidEmail = email => regex.email.test(email);

export const isValidPassword = email => regex.email.test(email);

export const isValidPhone = phone => regex.phoneNumber.test(phone);

export const isValidValue = ({
  value = '',
  required = true,
  type = '',
  minimum = 0,
  maximum = 1000,
}) => {
  if (required) {
    if (!value) {
      return 'Please Enter Some Value';
    } else if (type === 'email') {
      return !isValidEmail(value) ? 'Please Enter Valid Email!' : '';
    } else if (type === 'phone') {
      return !isValidPhone(value) ? 'Please Enter Valid Phone Number!' : '';
    } else if (value.length < minimum) {
      return `Minimum length should be ${minimum}`;
    } else if (value.length > maximum) {
      return `Maximum length should be ${maximum}`;
    } else {
      return '';
    }
  } else {
    return '';
  }
};

export const isValidForm = (form = {}) => {
  let valid = true;
  for (const field in form) {
    if (Object.hasOwnProperty.call(form, field)) {
      const error = form[field];
      valid = valid && !error;
    }
  }
  return valid;
};

export function getRegionForCoordinates(points) {
  let minX, maxX, minY, maxY;
  (point => {
    minX = point.latitude;
    maxX = point.latitude;
    minY = point.longitude;
    maxY = point.longitude;
  })(points[0]);
  points.map(point => {
    minX = Math.min(minX, point.latitude);
    maxX = Math.max(maxX, point.latitude);
    minY = Math.min(minY, point.longitude);
    maxY = Math.max(maxY, point.longitude);
  });

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const deltaX = maxX - minX;
  const deltaY = maxY - minY;
  return {
    latitude: +midX,
    longitude: +midY,
    latitudeDelta: +deltaX,
    longitudeDelta: +deltaY,
  };
}

export const googleLogin = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (e) {}

  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    return userInfo; // Optionally return userInfo
  } catch (error) {
    switch (error.code) {
      case statusCodes.SIGN_IN_CANCELLED:
        break;
      case statusCodes.IN_PROGRESS:
        break;
      case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
        break;
      default:
        break;
    }
  }
};

export const Shadow = (elevation = 5) => {
  return Platform.select({
    android: {
      elevation,
    },
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: elevation,
      shadowOffset: {width: 0, height: elevation / 2},
    },
  });
};

export const actualDownloadDoc = (name, fileUrl) => {
  const {dirs} = RNFetchBlob.fs;
  const dirToSave = Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
  const config = {
    fileCache: true,
    useDownloadManager: Platform.OS === 'android',
    notification: true,
    mediaScannable: true,
    title: name || 'Downloaded File',
    path: `${dirToSave}/${name || 'downloaded_file'}.pdf`,
  };
  RNFetchBlob.config(config)
    .fetch('GET', fileUrl)
    .then(res => {
      if (Platform.OS === 'ios') {
        RNFetchBlob.fs.writeFile(res.path(), res.data, 'base64');
        RNFetchBlob.ios.previewDocument(res.path());
      } else if (Platform.OS === 'android') {
        // RNFetchBlob.android.actionViewIntent(res.path(), 'application/pdf');
      }
      setTimeout(() => {
        ToastMsg('Document file is saved successfully');
      }, 500);
    })
    .catch(e => {
      setTimeout(() => {
        ToastMsg(e.message || e);
      }, 500);
    });
};

export const actualDownloadImage = async (imageUrl, imageName) => {
  try {
    // Determine the file extension
    const extension = imageUrl.split('.').pop();
    const fileName = `${imageName || 'downloaded_image'}.${extension}`;

    // Configure the download path
    const {dirs} = RNFetchBlob.fs;
    const downloadDir =
      Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
    const filePath = `${downloadDir}/${fileName}`;

    // Configure the download options
    const options = {
      fileCache: true,
      path: filePath,
      appendExt: extension,
      ...(Platform.OS === 'android' && {
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          mediaScannable: true,
          title: fileName,
          path: filePath,
        },
      }),
    };

    // Start the download
    const res = await RNFetchBlob.config(options).fetch('GET', imageUrl);

    // For iOS, save to Camera Roll
    if (Platform.OS === 'ios') {
      await CameraRoll.save(res.path(), {type: 'photo'});
    }

    // Optionally, show a success message to the user
  } catch (error) {
  }
};

export const FormatJsonDate = (data, location_id) => {
  // Group the data by Date
  const groupedData = data?.reduce((acc, item) => {
    if (!acc[item.Date]) {
      acc[item.Date] = [];
    }
    acc[item.Date].push(item);
    return acc;
  }, {});

  // Map over the grouped data to generate the final output
  return groupedData;
  return Object.keys(groupedData).map(date => {
    return {
      location_id: location_id,
      date: date,
      is_holiday: 0,
      time_slots: groupedData[date].map(i => ({
        start_time: i.startTime,
        end_time: i.endTime,
      })),
    };
  });
};

export const extractDayAndHour = data => {
  // Check if the necessary properties exist in the data
  if (
    data &&
    data.data &&
    data.data.rentalSpaceAvailability &&
    data.data.rentalSpaceAvailability.length > 0
  ) {
    // Extract the first rental space availability item
    const rentalSpace = data.data.rentalSpaceAvailability[0];

    // Get the date and split it to extract the day part
    const date = rentalSpace.date;
    const day = date.split('-')[2]; // Get the day (e.g., "20")

    // Check if there is at least one rentalSpaceAvailabilityTime
    if (
      rentalSpace.rentalSpaceAvailabilityTime &&
      rentalSpace.rentalSpaceAvailabilityTime.length > 0
    ) {
      // Get the start time and split it to extract the hour part
      const startTime = rentalSpace.rentalSpaceAvailabilityTime[0].start_time;
      const hour = parseInt(startTime.split(':')[0], 10); // Parse hour to remove leading zeros
      return {day, hour};
    }
  }

  return {day: null, hour: null}; // Return nulls if not found
};

export const extractDay = data => {
  // Check if the necessary properties exist in the data
  if (
    data &&
    data.data &&
    data.data.rentalSpaceAvailability &&
    data.data.rentalSpaceAvailability.length > 0
  ) {
    // Extract the first rental space availability item
    const rentalSpace = data.data.rentalSpaceAvailability[0];
    // Get the date and split it to extract the day part
    const date = rentalSpace.date;
    const day = date.split('-')[2]; // Split by '-' and get the day part
    return day;
  } else {
    return null; // Return null if the day is not found
  }
};

export const getStatusColor = status => {
  return status === 'completed' || status === 'confirmed'
    ? Colors.green
    : status === 'cancelled' || status == 'rejected'
    ? Colors.red
    : Colors.yellow;
};

export const getCurrentLocation = async () => {
  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission Required',
          message:
            'This app needs access to your location to provide better services.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        throw new Error('Location permission denied');
      }
    }
  };
  try {
    await requestPermissions();
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => resolve(position?.coords),
        error => reject(new Error(error.message || 'Error getting location')),
      );
    });
  } catch (error) {
    throw new Error(error.message || 'Error checking location permissions');
  }
};
