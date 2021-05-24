## backend
docker build -t pedrenrique:backend .
docker run -p 5000:5000 --network pedrenrique --name backend pedrenrique:backend

## frontend
docker build -t pedrenrique:frontend .
docker run -p 3000:3000 --network pedrenrique --name frontend pedrenrique:frontend

## tf
docker pull tensorflow/serving

sudo docker run -p 8501:8501 --name tensorflow --network pedrenrique --mount type=bind,source=$(pwd)/models/classifier,target=/models/classifier -e MODEL_NAME=classifier -t tensorflow/serving &

docker run -p 8501:8501 --name tensorflow --network pedrenrique --mount type=bind,source=C:/Users/pedro/Desktop/pedrenrique-analytics/tensorflow/models/classifier,target=/models/classifier -e MODEL_NAME=classifier -t tensorflow/serving