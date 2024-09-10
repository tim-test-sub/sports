import React, {} from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { login, getProfile } from '@react-native-seoul/kakao-login';

interface Props {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<any, any>;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const showAlert = (title: string,message: string) => {
    return new Promise((resolve) => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: "확인",
                    onPress: () => resolve("확인됨"),
                }
            ],
            { cancelable: false }
        );
    });
};
const LoginScreen: React.FC<Props> = ({ navigation }) => {

    const handleKakaoLogin = async () => {
        try {
            const token = await login();  // 카카오 로그인 실행
            console.log("token:"+token);
          //  const profile = await getProfile();  // 로그인 후 사용자 정보 가져오기
            //await showAlert(`'카카오 로그인 성공'`, `, 닉네임: ${profile?.nickname} \n id:${profile?.id}`);
            navigation.replace('Main');
        } catch (err) {
            // @ts-ignore
            Alert.alert('카카오 로그인 실패', err.message);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.title}>Login</Text>

                    {/* 카카오 로그인 버튼 */}
                    <TouchableOpacity style={styles.kakaoButton} onPress={handleKakaoLogin}>
                        <Text style={styles.kakaoButtonText}>Login with Kakao H</Text>
                    </TouchableOpacity>


                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    loginButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#6A5ACD',
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    kakaoButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#FEE500',  // 카카오의 시그니처 노란색
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    kakaoButtonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    signupButton: {
        marginTop: 20,
    },
    signupButtonText: {
        color: '#6A5ACD',
        fontSize: 16,
    },
});

export default LoginScreen;
