import { Pressable, StyleSheet, Text } from "react-native";
import useItems from "../hooks/useItems";

const Row = ({ item }) => {
  const { removeItem } = useItems()
  return (
    <Pressable onPress={() => removeItem(item.id)} android_ripple={{ color: "#dddddd" }}>
      <Text style={styles.row}>{item.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Row;
