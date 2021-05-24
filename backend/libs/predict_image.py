import os
import numpy as np
from PIL import Image
# import tensorflow.keras.preprocessing.image as tf_image
import requests
import json

classes = {
    0: "covid",
    1: "normal",
    2: "pneumonia"
}

TENSORFLOW_SERVING_URL = "http://localhost:8501/v1/models/classifier:predict"

def convert_image_to_array(image_path):
    # image = tf_image.load_img(image_path, target_size=(128, 128))
    image = Image.open(image_path).convert("RGB").resize((150, 150))
    image_array = np.array([np.asarray(image)])/255.0
    os.remove(image_path)
    return image_array

def request_model(image_array):
    data = json.dumps({
        # "signature": "serving_default",
        "instances": image_array.tolist()
    })

    json_reponse = requests.post(
        url=TENSORFLOW_SERVING_URL,
        data=data,
        headers={"Content-Type": "application/json"}
    )

    predictions = json.loads(json_reponse.text)["predictions"]
    class_predicted_name = classes[np.argmax(np.array(predictions), axis=1)[0]]
    return class_predicted_name
