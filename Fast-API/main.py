from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import inflect

app = FastAPI()


class Item(BaseModel):
    number: int


@app.post("/convert_number")
def convert_number_to_english(item: Item):
    # inflectライブラリを使用して数値を英語表記に変換
    p = inflect.engine()
    english_representation = p.number_to_words(item.number)
    return {"english_representation": english_representation}