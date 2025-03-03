import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
    const webClientId = "696838875052-u97od27sp4fhkotep46napqt7csovda7.apps.googleusercontent.com";

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: webClientId,
        });
        console.log("Google Sign-In Configured ✅"); 
    }, []);

    const googleLogin = async () => {
        try {
            console.log("Checking Google Play Services...");
            const playServicesAvailable = await GoogleSignin.hasPlayServices();
            console.log("Google Play Services Available:", playServicesAvailable);

            console.log("Starting Google Sign-In...");
            const userInfo = await GoogleSignin.signIn();
            console.log("✅ User Info:", JSON.stringify(userInfo, null, 2)); 
        } catch (error) {
            console.error("❌ Google Sign-In Error:", error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.warn("User cancelled the login process.");
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.warn("Sign-in is already in progress.");
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.warn("Google Play Services are not available.");
            } else {
                console.warn("Unknown error occurred:", error);
            }
        }
    };

    return (
        <View style={{ margin: 20 }}>
            <TouchableOpacity onPress={googleLogin}>
                <View style={styles.loginButton}>
                    <Text style={{ color: '#222222', fontWeight: '400', fontSize: 18 }}>
                        Login with Google
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    loginButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        width: screenWidth - 50,
        height: 48,
        borderRadius: 10,
        marginTop: 100
    }
});

export default HomeScreen;
