import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "../firebase/Config";
import { useState } from "react";

const SignUpForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [hasFailed, setHasFailed] = useState(false);

  const SignUp = async () => {
    if (password !== passwordConfirm) {
      setPassword("");
      setPasswordConfirm("");
      setHasFailed(true);
    }
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          navigation.navigate("Shopping list");
        }
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setHasFailed(true);
      })
      .finally(() => {
        setEmail("")
        setPassword("");
        setPasswordConfirm("");
      });
  };

  return (
    <View>
      {hasFailed && <Text>Try again!</Text>}
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
      <TextInput
        style={styles.input}
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
        secureTextEntry
        autoComplete="password"
        placeholder="Confirm password"
      />
      <Button title="Sign up" onPress={SignUp}></Button>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
  },
});
