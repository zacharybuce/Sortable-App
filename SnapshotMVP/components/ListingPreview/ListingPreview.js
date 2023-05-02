import { useRef, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import { TextField } from "rn-material-ui-textfield";
import { ListingPreviewStyles, OFFWHITE } from "../../Styles";
import { STEPS } from "../../utils/constants";
import Header from "./Header";

export default function ListingPreview({
  processingRes,
  setImage,
  setStep,
  image,
}) {
  const [title, setTitle] = useState(processingRes.title);
  const [price, setPrice] = useState(processingRes.priceRange);
  const [description, setDescription] = useState(processingRes.description);
  const [color, setColor] = useState(processingRes.color);
  const [type, setType] = useState(processingRes.type || "");
  const [keywords, setKeywords] = useState(processingRes.keywords);
  const titleRef = useRef();

  const goBack = () => {
    setImage(undefined);
    setStep(STEPS.PICTURE);
  };

  return (
    <SafeAreaView
      style={ListingPreviewStyles.container}
      onTouchStart={Keyboard.dismiss}
    >
      <Header goBack={goBack} />
      <View style={ListingPreviewStyles.formContainer}>
        <View>
          <Image
            source={image}
            style={{ height: 100, width: 75, borderRadius: 5 }}
          />
        </View>

        <TextField
          label="Title"
          onChangeText={setTitle}
          value={title}
          ref={titleRef}
        />
        <TextField
          label="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType={"numeric"}
        />
        <TextField
          label="Description"
          multiline
          numberOfLines={5}
          value={description}
          onChangeText={setDescription}
        />
        <TextField label="Color" onChangeText={setColor} value={color} />
        <TextField label="Type" onChangeText={setType} value={type} />
      </View>
    </SafeAreaView>
  );
}
