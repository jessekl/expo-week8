import { Text, Pressable, StyleSheet, View } from "react-native";
import LoginForm from "../components/LoginForm";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginForm navigation={navigation} />
      <Pressable  onPress={() => navigation.navigate("Sign-up")}>
        <Text>Don’t have an account? Sign up</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 8,
    gap: 8,
  },
});
