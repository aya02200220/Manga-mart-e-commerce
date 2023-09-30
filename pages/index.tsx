import { useEffect, useState } from "react";
import mangaData from "../data/mangaData";
import login from "./login";
interface Image {
  id: number; // idはnumber型です。
  title: string;
  price: number;
  image: string;
  description: string; // descriptionプロパティも追加してください。
}

export default function Home() {
  const [images, setImages] = useState<Image[]>([]);
  const [favArr, setFavArr] = useState<Image[]>([]);

  useEffect(() => {
    setImages(mangaData); // API呼び出しの代わりに、直接mangaDataをセットします。
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavArr(favs);
  }, []);

  const onFavClick = (image: Image) => {
    // ... (お気に入りに追加・削除のロジック)
  };

  return (
    <div>
      <login />
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.image} alt={image.title} />
          <p>{image.title}</p>
          <p>${image.price.toFixed(2)}</p>
          <p>{image.description}</p> {/* descriptionも表示 */}
          <button onClick={() => onFavClick(image)}>
            {favArr.find((fav) => fav.id === image.id)
              ? "Remove from Fav"
              : "Add to Fav"}
          </button>
        </div>
      ))}
    </div>
  );
}
