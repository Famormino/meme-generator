import {useState} from "react";

import memeData from "../memeData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllmemeImage] = useState(memeData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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

      <div className="meme">
        <img className="form--image" src={memeImage.randomImage} />
        <h2 className="meme--text top">One does not simply</h2>
        <h2 className="meme--text bottom">Walk into Mordor</h2>
      </div>
    </main>
  );
}
