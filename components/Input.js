import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import useItems from "../hooks/useItems";

const Input = () => {
  const { input, addItem, setInput } = useItems()

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Add item"
        
      />
      <Pressable
        onPress={addItem}
        android_ripple={{ color: "#dddddd" }}
      >
        <Text style={styles.add}>Add</Text>
      </Pressable>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  add: {
    fontSize: 20,
    color: "#0077EE",
    padding: "8",
  },
});
