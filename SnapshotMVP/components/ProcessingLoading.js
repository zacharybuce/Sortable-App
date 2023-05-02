import { useEffect, useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";

export default function ProcessingLoading() {
  const [stepText, setStepText] = useState("Cropping image...");

  useEffect(() => {
    setTimeout(() => setStepText("Analyzing item..."), 1000);
    setTimeout(() => setStepText("Creating description.."), 2000);
    setTimeout(() => setStepText("Generating keywords..."), 3000);
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
      }}
    >
      <ActivityIndicator size={50} />
      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 16,
        }}
      >
        {stepText}
      </Text>
    </View>
  );
}
