import { useEffect, useState } from "react";
import axios from "axios";

interface Image {
  id: string;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  const [images, setImages] = useState<Image[]>([]);
  const [favArr, setFavArr] = useState<Image[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/images");
        if (Array.isArray(response.data)) {
          setImages(response.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchData();
    // Local Storageからお気に入りを読み込み
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavArr(favs);
  }, []);

  const onFavClick = (image: Image) => {
    // ... (お気に入りに追加・削除のロジック)
  };

  return (
    <div>
      {/* イメージのリストを表示 */}
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.image} alt={image.title} />
          <p>{image.title}</p>
          <p>${image.price.toFixed(2)}</p>
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
