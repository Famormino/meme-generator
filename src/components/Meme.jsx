import {useEffect, useState} from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target;

    setMemeImage((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          name="topText"
          placeholder="Top text"
          type="text"
          value={memeImage.topText}
          onChange={handleChange}
        />
        <input
          className="form--input"
          name="bottomText"
          placeholder="Bottom text"
          type="text"
          value={memeImage.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" type="button" onClick={getMemeImage}>
          Get a new meme image 🔎
        </button>
      </div>

      <div className="meme">
        <img className="form--image" src={memeImage.randomImage} />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </main>
  );
}
