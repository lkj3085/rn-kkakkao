import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 15, bottom: 15 }}
      style={{ paddingHorizontal: 6 }}>
      <Ionicons name={props.name} size={24} color={"black"} />
    </TouchableOpacity>
  );
};

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
      }}>
      <Text style={[styles.title, { fontSize: 22 }]}>친구</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="md-musical-notes-outline" />
        <IconButton name="ios-settings-outline" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
});
