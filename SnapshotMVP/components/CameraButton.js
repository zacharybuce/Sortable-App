import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { CameraStyles, OFFWHITE } from "../Styles";

export function CameraButton({ onPress }) {
  return (
    <View style={CameraStyles.buttonContainer}>
      <TouchableOpacity onPress={onPress} style={CameraStyles.button}>
        <Entypo name={"camera"} size={28} color={OFFWHITE} />
        <Text style={CameraStyles.buttonText}>Take a Picture</Text>
      </TouchableOpacity>
    </View>
  );
}
