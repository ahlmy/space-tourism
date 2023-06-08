"use client";
import styles from "./page.module.css";
import { europa, mars, moon, titan } from "../../assets/destination";
import Image from "next/image";
import { Bodies } from "@/components";
import { useState } from "react";

export const metadata = {
  title: "Space Tourism | Destination",
  description: "Destinations for space tourism",
};

const bodyInfos = {
  moon: {
    title: "moon",
    desc: ` See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.`,
    distance: "225 MIL. KM",
    time: "9 MONTHs",
    img: moon,
  },
  europa: {
    title: "europa",
    desc: ` The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.`,
    distance: "628 mil. km",
    time: "3 years",
    img: europa,
  },
  titan: {
    title: "titan",
    desc: ` The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.`,
    distance: "1.6 bil. km",
    time: "7 years",
    img: titan,
  },
  mars: {
    title: "Mars",
    desc: ` Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!`,
    distance: "225 mil. km",
    time: "9 months",
    img: mars,
  },
};

const Destination = () => {
  const [bodyName, setBodyName] = useState("moon");
  return (
    <main>
      <div className={styles.destination}>
        <div className={styles.leftContainer}>
          <div className={styles.left}>
            <h2>pick your destination</h2>
            <Image
              className={styles.image}
              src={bodyInfos[bodyName].img}
              alt="mars"
            />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.right}>
            <Bodies
              bodyName={bodyName}
              setBodyName={(n) => setBodyName(n)}
              bodyInfos={bodyInfos}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Destination;
