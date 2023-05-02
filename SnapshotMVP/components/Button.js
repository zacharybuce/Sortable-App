import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { CameraStyles, OFFWHITE } from "../Styles";

export function Button({ onPress, title, icon }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Entypo name={icon} size={28} color={OFFWHITE} />
      <Text style={CameraStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
