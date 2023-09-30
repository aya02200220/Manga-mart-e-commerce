import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import mangaData from "../data/mangaData";

interface Image {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const Home = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [favArr, setFavArr] = useState<Image[]>([]);

  useEffect(() => {
    setImages(mangaData);
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavArr(favs);
  }, []);

  const onFavClick = (image: Image) => {
    // ... (logic for adding/removing favorites)
  };

  return (
    <div>
      <login />
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.image} alt={image.title} />
          <p>{image.title}</p>
          <p>${image.price.toFixed(2)}</p>
          <p>{image.description}</p>
          <button onClick={() => onFavClick(image)}>
            {favArr.find((fav) => fav.id === image.id)
              ? "Remove from Fav"
              : "Add to Fav"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
