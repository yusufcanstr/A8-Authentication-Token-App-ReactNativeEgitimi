import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../component.js/AuthContent";
import { createUser } from "../util/auth";
import Loading from "./Loading";

export default function SignupScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthanticating(true);
    await createUser(email, password);
    setIsAuthanticating(false);
  }

  if(isAuthanticating) {
    return <Loading message="Kullanıcı oluşturuluyor..."/>;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
