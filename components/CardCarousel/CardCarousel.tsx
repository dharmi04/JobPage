"use client"
import { FC, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Import React Icons
import styles from "./CardCarousel.module.css";

interface Card {
  type: string;
  title: string;
  description: string;
  image: string;
}

const cards: Card[] = [
  {
    type: "Video",
    title: "DEIB at Intuit",
    description: "Intuit's Chief DEI Officer, Humera Shahid, on Diversity, Equity, Inclusion, and Belonging",
    image: "/Images/Image1.jpg",
  },
  {
    type: "Blog",
    title: "Improving Tax Skills",
    description: "I was ready to up my tax game, that's why I joined Intuit",
    image: "/Images/Image2.jpg",
  },
  {
    type: "Blog",
    title: "Internal Mobility",
    description: "Internal Mobility Can Enhance Skill Development",
    image: "/Images/Image3.png",
  },
  {
    type: "Video",
    title: "DEIB at Intuit",
    description: "Intuit's Chief DEI Officer, Humera Shahid, on Diversity, Equity, Inclusion, and Belonging",
    image: "/Images/Image1.jpg",
  },
  {
    type: "Blog",
    title: "Improving Tax Skills",
    description: "I was ready to up my tax game, that's why I joined Intuit",
    image: "/Images/Image2.jpg",
  },
  {
    type: "Blog",
    title: "Internal Mobility",
    description: "Internal Mobility Can Enhance Skill Development",
    image: "/Images/Image3.png",
  },
  // Add more cards as needed...
];

const CardCarousel: FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className="text-3xl font-bold text-search mb-10">Related Content</h2>
      <div className={styles.carousel}>
        <button className={`${styles.arrow} ${styles.left}`} onClick={scrollLeft}>
          <AiOutlineLeft />
        </button>
        <div className={styles.carouselTrack} ref={carouselRef}>
          {cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <img src={card.image} alt={card.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <p className={styles.type}>{card.type}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className={`${styles.arrow} ${styles.right}`} onClick={scrollRight}>
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
