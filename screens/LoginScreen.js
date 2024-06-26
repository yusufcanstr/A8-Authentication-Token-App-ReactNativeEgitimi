import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import AuthContent from "../component.js/AuthContent";
import Loading from "./Loading";
import { login } from "../util/auth";
import { AuthContext } from "../store/auth-context";

export default function LoginScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function LoginHandler({ email, password }) {
    setIsAuthanticating(true);
    try {
      const token = await login(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert("Giriş yapılamadı", "Lütfen bilgilerinizi kontrol ediniz!");
    }
    setIsAuthanticating(false);
  }

  if (isAuthanticating) {
    return <Loading message="Giriş Yapılıyor..." />;
  }

  return <AuthContent isLogin onAuthenticate={LoginHandler} />;
}

const styles = StyleSheet.create({});
