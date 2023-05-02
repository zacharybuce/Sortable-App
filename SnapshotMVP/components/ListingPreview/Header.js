import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ goBack }) {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
    >
      <TouchableOpacity onPress={goBack}>
        <Ionicons name={"arrow-back"} size={28} />
      </TouchableOpacity>
      <Text style={{ fontSize: 30, marginLeft: 10 }}>New Listing</Text>
    </View>
  );
}
