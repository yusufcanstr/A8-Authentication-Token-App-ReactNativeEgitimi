import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import AuthForm from "./AuthForm";
import ButtonWhite from "./ButtonWhite";
import { useNavigation } from "@react-navigation/native";

export default function AuthContent({ isLogin }) {
  const navigation = useNavigation();

  function submitHandler(credentials) {
    console.log(credentials);
    let { confirmEmail,confirmPassword,email,password } = credentials;
    email=email.trim();
    password = password.trim();

    const emailIsValid=email.includes('@');
    const passwordIsValid=password.length >6;
    const emailsAreEqual = email === confirmEmail;
    const passwordAreEqual = password === confirmPassword;

    if(!emailIsValid || !passwordIsValid || (!isLogin && (!emailsAreEqual || !passwordAreEqual))) 
      {
          Alert.alert("Hops!", "Lütfen girdiğiiniz değerleri kontrol ediniz!");
          return;
      }

  }

  function switchScreen() {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  }

  return (
    <View style={styles.container}>
      <AuthForm isLogin={isLogin} onSubmit={submitHandler} />
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
    backgroundColor: "#87cefa",
    margin: 50,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 20,
    elevation: 4,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
