import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthForm from "./AuthForm";
import ButtonWhite from "./ButtonWhite";
import { useNavigation } from "@react-navigation/native";


export default function AuthContent({ isLogin }) {
  const navigation = useNavigation();

  function switchScreen() {
    if(isLogin){
      navigation.navigate('Signup')
    }else{
      navigation.navigate('Login')
    }
  }

  return (
    <View style={styles.container}>
      <AuthForm isLogin={isLogin} />
      <View>
        <ButtonWhite onPress={switchScreen}>
          {isLogin ? "Yeni Kullanıcı Oluştur" : "Giriş Yap"}
        </ButtonWhite>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#87cefa',
        margin: 50,
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 20,
        elevation: 4,
        shadowOffset: {width: 1, height: 2},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 4,
    }
});
