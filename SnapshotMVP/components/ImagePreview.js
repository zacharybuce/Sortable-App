import { ImageBackground, View } from "react-native";

import { CameraStyles, ImagePreviewStyles } from "../Styles";
import { Button } from "./Button";
import { STEPS } from "../utils/constants";

export default function ImagePreview({ image, setImage, setStep }) {
  return (
    <ImageBackground source={{ uri: image }} style={CameraStyles.camera}>
      <View style={ImagePreviewStyles.buttonContainer}>
        <Button
          title={"Re-take"}
          icon={"retweet"}
          onPress={() => setImage(undefined)}
        />
        <Button
          title={"Continue"}
          icon={"check"}
          onPress={() => setStep(STEPS.PROCESSING)}
        />
      </View>
    </ImageBackground>
  );
}
