import { StyleSheet, View } from "react-native";
import SignUpForm from "../components/SignUpForm";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SignUpForm navigation={navigation} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 8,
  },
});
