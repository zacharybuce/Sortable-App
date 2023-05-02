import { Platform, StatusBar, StyleSheet } from "react-native";

export const OFFWHITE = "#f1f1f1";

export const CameraStyles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  buttonContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10%",
  },
  button: {
    backgroundColor: `rgba(0, 0, 0, 0.3)`,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: OFFWHITE,
    marginLeft: 10,
  },
});

export const ImagePreviewStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    marginBottom: "10%",
    backgroundColor: `rgba(0, 0, 0, 0.3)`,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export const ListingPreviewStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  formContainer: {
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
