import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../component.js/AuthContent";
import Loading from "./Loading";
import { login } from "../util/auth";

export default function LoginScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);

  async function LoginHandler({ email, password }) {
    setIsAuthanticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert("Giriş yapılamadı", "Lütfen bilgilerinizi kontrol ediniz!")
    }
    setIsAuthanticating(false);
  }

  if (isAuthanticating) {
    return <Loading message="Giriş Yapılıyor..." />;
  }

  return <AuthContent isLogin onAuthenticate={LoginHandler} />;
}

const styles = StyleSheet.create({});
