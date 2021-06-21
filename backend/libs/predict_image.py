import os
import numpy as np
# from PIL import Image
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import requests
import json

classes = np.array([
    'Atelectasia',
    'Cardiomegalia',
    'Consolidação',
    'COVID-19',
    'Edema',
    'Efusão',
    'Enfisema',
    'Fibrose',
    'Hérnia',
    'Infiltração',
    'Massa',
    'Nódulo',
    'Espessamento Pleural',
    'Pneumonia',
    'Pneumotórax'
])

# classes = {
#     0: "covid",
#     1: "normal",
#     2: "pneumonia"
# }

TENSORFLOW_SERVING_URL = "http://tensorflow:8501/v1/models/classifier:predict"

# def convert_image_to_array(image_path):
#     # image = tf_image.load_img(image_path, target_size=(128, 128))
#     image = Image.open(image_path).convert("RGB").resize((150, 150))
#     image_array = np.array([np.asarray(image)])/255.0
#     os.remove(image_path)
#     return image_array

def load_image(image_filename, image_dir, H=264, W=264):
    image_path = os.path.join(image_dir, image_filename)

    x = load_img(image_path, target_size=(H, W, 3))
    x = img_to_array(x)
    x = x/255
    x = np.expand_dims(x, axis=0)

    return x

def request_model(x):
    data = json.dumps({
        # "signature": "serving_default",
        "instances": x.tolist()
    })

    json_response = requests.post(
        url=TENSORFLOW_SERVING_URL,
        data=data,
        headers={"Content-Type": "application/json"}
    )

    predictions = np.array(json.loads(json_response.text)['predictions'][0]).round()
    predictions = classes[predictions.astype(bool)].tolist()
    return predictions

