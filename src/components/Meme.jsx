import {useState} from "react";

import memeData from "../memeData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" placeholder="Top text" type="text" />
        <input className="form--input" placeholder="Bottom text" type="text" />
        <button className="form--button" type="button" onClick={getMemeImage}>
          Get a new meme image 🔎
        </button>
      </div>
      <img className="form--image" src={memeImage} />
    </main>
  );
}
