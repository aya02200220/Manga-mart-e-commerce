import React, { useState, useEffect } from "react";
import { useTrail, a } from "@react-spring/web";

const Trail: React.FC<{ open: boolean; children: React.ReactNode }> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trailsText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function HeroLogo() {
  const [open, set] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // コンポーネントがマウントされたときにクライアントであることを設定
    setIsClient(true);
  }, []);

  if (!isClient) {
    // サーバーサイドでは何もレンダリングしない
    return null;
  }
  return (
    <div
      className="hero-container text-white text-opacity-80"
      onClick={() => set((state) => !state)}
    >
      <Trail open={open}>
        <span>Welcome</span>
        <span>to</span>

        <span>Manga</span>
        <span>Mart</span>
      </Trail>
    </div>
  );
}
