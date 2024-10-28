from fastapi import FastAPI
import joblib
from fastapi.middleware.cors import CORSMiddleware
import numpy as np

# http://127.0.0.1:8000/docs  FOR DOCS OF FASTAPI

from pydantic import BaseModel

class Item(BaseModel):
    arrr: list[float]

app = FastAPI()


origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL = joblib.load("./isolation_forest_model.pkl")

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/predict")
async def predict(formData:list[float]):
    # print(input)
    ip = np.array(formData)
    ip = ip.reshape(1, -1)
    prediction = MODEL.predict(ip)
    
    print(prediction)
    if(ip.any( )):
        return {"fraud":"true"}
    else:
        return {"fraud":"false"}