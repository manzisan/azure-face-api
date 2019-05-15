function faceAPI(img) {
  const subscriptionKey;
  const endpoint = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";
  const params = {
    "returnFaceId": "true",
    "returnFaceLandmarks": "false",
    "returnFaceAttributes": "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise",
  };

  $.ajax({
    url: endpoint + "?" + $.param(params),
    type: "POST",
    data: img,
    beforeSend: (xhrObj)=> {
      xhrObj.setRequestHeader("Content-Type","application/octet-stream");
      xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
    },
  }).done((response)=> {
    console.log(JSON.stringify(response, null, 2));
  }).fail((e)=> {
    console.log(e);
  });
}
