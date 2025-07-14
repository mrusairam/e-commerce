'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const images = [
    { id: 1, url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg" },
    { id: 2, url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg" },
    { id: 3, url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg" },
    { id: 4, url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg" },
    { id: 5, url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg" },
  ];

  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg aspect-video">
      {images.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={item.url}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain bg-white"
          />
        </div>
      ))}
    </div>
  );
}
