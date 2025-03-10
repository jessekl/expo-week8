import { StyleSheet, View, Button, TextInput } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "../firebase/Config";
import { useState } from "react";

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          navigation.navigate("Shopping list");
        }
      })
      .catch((error) => {
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          console.log("Invalid credentials.");
        } else if (error.code === "auth/too-many-requests") {
          console.log("Too many attemps to login");
        } else {
          console.log(error.code, error.message);
        }
      })
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={email}
        keyboardType="email-address"
        autoComplete="email"
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoComplete="password"
        placeholder="Password"
      />
      <Button title="login" onPress={login}></Button>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
  },
});
