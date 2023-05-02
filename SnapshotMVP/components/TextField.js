import { View, Text, TextInput } from "react-native";

export function TextField({ title, value, onChangeText, multiline }) {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput value={value} onChangeText={onChangeText} />
    </View>
  );
}
