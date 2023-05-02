import { STEPS } from "./constants";

export async function processImage(
  image,
  setStep,
  setProcessingRes,
  setCroppedImage
) {
  let body = new FormData();
  body.append("image_data", {
    uri: image,
    name: "photo.png",
    filename: "imageName.png",
    type: "image/png",
  });
  body.append("Content-Type", "image/png");

  const head = {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: body,
  };

  const urls = [
    "http://192.9.245.205:8000/images",
    "http://192.9.155.189:8000/send_image",
  ];

  const requests = urls.map((url) => fetch(url, head));
  const responses = await Promise.all(requests);
  const errors = responses.filter((response) => !response.ok);

  if (errors.length > 0) {
    throw errors.map((response) => Error(response.statusText));
  }

  responses.map(async (response) => {
    if (response.url === "http://192.9.245.205:8000/images") {
      console.log(response);
      const json = await response.json();
      console.log(json);
      setProcessingRes(JSON.parse(json));
    } else {
      console.log(response);
      const data = await response.blob();
      setCroppedImage(URL.createObjectURL(data));
    }
  });

  //   const json = await res.json();
  //   console.log(json);
  //   setProcessingRes(JSON.parse(json));
  //   setStep(STEPS.LISTING_PREVIEW);
}
