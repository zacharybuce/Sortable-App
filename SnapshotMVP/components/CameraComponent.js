import { useState } from "react";
import { Camera } from "expo-camera";
import { View, Text } from "react-native";

import { CameraStyles } from "../Styles";
import { CameraButton } from "./CameraButton";

export default function CameraComponent({
  hasCameraPermission,
  cameraRef,
  setImage,
}) {
  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (!hasCameraPermission) {
    return (
      <View>
        <Text>Please grant access to the camera in your settings</Text>
      </View>
    );
  }

  return (
    <Camera ref={cameraRef} style={CameraStyles.camera}>
      <CameraButton onPress={takePicture} />
    </Camera>
  );
}
