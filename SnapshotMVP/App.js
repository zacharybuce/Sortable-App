import { StyleSheet, Text, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";

import CameraComponent from "./components/CameraComponent";
import { MOCK_RES, STEPS } from "./utils/constants";
import ImagePreview from "./components/ImagePreview";
import { processImage } from "./utils/api";
import ProcessingLoading from "./components/ProcessingLoading";
import ListingPreview from "./components/ListingPreview/ListingPreview";

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [image, setImage] = useState();
  const [step, setStep] = useState(STEPS.PICTURE);
  const [processingRes, setProcessingRes] = useState();
  const [croppedImage, setCroppedImage] = useState();
  const cameraRef = useRef();

  //request camera permission
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  //send picture to api endpoint/s
  useEffect(() => {
    if (step === STEPS.PROCESSING && image) {
      processImage(image, setStep, setProcessingRes, setCroppedImage);
    }
  }, [step]);

  if (!image && step === STEPS.PICTURE) {
    return (
      <CameraComponent
        hasCameraPermission={hasCameraPermission}
        cameraRef={cameraRef}
        setImage={setImage}
      />
    );
  }

  if (image && step === STEPS.PICTURE) {
    return <ImagePreview image={image} setImage={setImage} setStep={setStep} />;
  }

  if (step === STEPS.PROCESSING) {
    return <ProcessingLoading />;
  }

  if (step === STEPS.LISTING_PREVIEW) {
    return (
      <ListingPreview
        processingRes={processingRes}
        setImage={setImage}
        setStep={setStep}
        image={croppedImage}
      />
    );
  }
}
