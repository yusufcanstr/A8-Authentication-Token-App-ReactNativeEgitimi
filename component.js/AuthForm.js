import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input"; // Başka bir dosyadan Input bileşenini içe aktarıyoruz.
import Button from "./Button";

export default function AuthForm({ isLogin }) {
  const [enteredEmail, setEnteredEmail] = useState(""); // E-posta adresini saklamak için state tanımlıyoruz.
  const [enteredPassword, setEnteredPassword] = useState(""); // Şifreyi saklamak için state tanımlıyoruz.
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

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
      />
      {!isLogin && (
        <Input
          label="Email Doğrula"
          keyboardType="email_address"
          onUpdateValue={updateInput.bind(this, "confirmEmail")}
          value={enteredConfirmEmail} // E-posta değerini Input bileşenine iletiyoruz.
        />
      )}

      {/* Input bileşenini kullanarak şifre girişi için bir input alanı oluşturuyoruz. */}
      <Input
        label="Şifre"
        secure // Şifrenin gizli olarak görüntülenmesini sağlayacak prop'u ekliyoruz.
        onUpdateValue={updateInput.bind(this, "password")}
        value={enteredPassword} // Burada hata var, enteredEmail değeri yerine enteredPassword olmalı.
      />
      {!isLogin && (
        <Input
          label="Şifreyi Doğrula"
          secure
          onUpdateValue={updateInput.bind(this, "confirmPassword")}
          value={enteredConfirmPassword} // E-posta değerini Input bileşenine iletiyoruz.
        />
      )}
      <View style={styles.buttons}>
        <Button>{isLogin ? "Giriş Yap" : "Kayıt Ol"}</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 10,
  },
});
