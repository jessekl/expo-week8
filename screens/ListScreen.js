import { FlatList, StyleSheet, View } from "react-native";
import Row from "../components/Row";
import Input from "../components/Input";
import useItems from "../hooks/useItems";

const ListScreen = () => {
  const { items, isLoading, error } = useItems()
  

  const handleRemoveItem = (id) => {};

  return (
    <View style={styles.container}>
      <Input />
      {items && !isLoading && !error ? (
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Row item={item} handleRemoveItem={handleRemoveItem} />
          )}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      ) : null}
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  list: {
    flexDirection: "column",
    marginLeft: "8",
    marginRight: "8",
  },
});
