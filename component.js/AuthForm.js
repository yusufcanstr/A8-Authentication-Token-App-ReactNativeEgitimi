import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input"; // Başka bir dosyadan Input bileşenini içe aktarıyoruz.
import Button from "./Button";

export default function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState(""); // E-posta adresini saklamak için state tanımlıyoruz.
  const [enteredPassword, setEnteredPassword] = useState(""); // Şifreyi saklamak için state tanımlıyoruz.
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  console.log(credentialsInvalid);
  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirimPassword: passwordDontMatch,
  } = credentialsInvalid;
  console.log(
    emailIsInvalid,
    emailsDontMatch,
    passwordIsInvalid,
    passwordDontMatch
  );

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  // Kullanıcıdan gelen giriş bilgilerini güncellemek için bir fonksiyon tanımlıyoruz.
  function updateInput(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue); // E-posta state'ini güncelliyoruz.
        break;
      case "password":
        setEnteredPassword(enteredValue); // Şifre state'ini güncelliyoruz.
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  return (
    <View>
      {/* Input bileşenini kullanarak e-posta girişi için bir input alanı oluşturuyoruz. */}
      <Input
        label="Email"
        keyboardType="email_address"
        onUpdateValue={updateInput.bind(this, "email")}
        value={enteredEmail} // E-posta değerini Input bileşenine iletiyoruz.
        isInvalid={emailIsInvalid}
      />
      {!isLogin && (
        <Input
          label="Email Doğrula"
          keyboardType="email_address"
          onUpdateValue={updateInput.bind(this, "confirmEmail")}
          value={enteredConfirmEmail} // E-posta değerini Input bileşenine iletiyoruz.
          isInvalid={emailsDontMatch}
        />
      )}

      {/* Input bileşenini kullanarak şifre girişi için bir input alanı oluşturuyoruz. */}
      <Input
        label="Şifre"
        secure // Şifrenin gizli olarak görüntülenmesini sağlayacak prop'u ekliyoruz.
        onUpdateValue={updateInput.bind(this, "password")}
        value={enteredPassword} // Burada hata var, enteredEmail değeri yerine enteredPassword olmalı.
        isInvalid={passwordIsInvalid}
      />
      {!isLogin && (
        <Input
          label="Şifreyi Doğrula"
          secure
          onUpdateValue={updateInput.bind(this, "confirmPassword")}
          value={enteredConfirmPassword} // E-posta değerini Input bileşenine iletiyoruz.
          isInvalid={passwordDontMatch}
        />
      )}
      <View style={styles.buttons}>
        <Button onPress={submitHandler}>
          {isLogin ? "Giriş Yap" : "Kayıt Ol"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 10,
  },
});
