import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../component.js/AuthContent";
import Loading from "./Loading";
import { login } from "../util/auth";

export default function LoginScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);

  async function LoginHandler({ email, password }) {
    setIsAuthanticating(true);
    await login(email, password);
    setIsAuthanticating(false);
  }

  if (isAuthanticating) {
    return <Loading message="Giriş Yapılıyor..." />;
  }

  return <AuthContent isLogin onAuthenticate={LoginHandler} />;
}

const styles = StyleSheet.create({});
