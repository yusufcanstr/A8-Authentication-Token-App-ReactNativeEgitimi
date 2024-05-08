import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import AuthContent from "../component.js/AuthContent";
import { createUser } from "../util/auth";
import Loading from "./Loading";
import { AuthContext } from "../store/auth-context";

export default function SignupScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function signUpHandler({ email, password }) {
    setIsAuthanticating(true);
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert("Kayıt olunamadı!", "lütfen bilgilerinizi kontrol ediniz.");
    }

    setIsAuthanticating(false);
  }

  if (isAuthanticating) {
    return <Loading message="Kullanıcı oluşturuluyor..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
