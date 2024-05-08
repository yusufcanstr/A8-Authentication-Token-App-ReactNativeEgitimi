import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../component.js/AuthContent";
import { createUser } from "../util/auth";
import Loading from "./Loading";

export default function SignupScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthanticating(true);
    try {
      await createUser(email, password);
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
