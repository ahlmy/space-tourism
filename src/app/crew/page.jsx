"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import {
  douglas_hurley,
  anousheh_ansari,
  mark_shuttleworth,
  victor_glover,
} from "@/assets/crew";

const crewMembers = {
  douglas: {
    name: "douglas hurley",
    title: "commander",
    desc: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.`,
    img: douglas_hurley,
  },
  anousheh: {
    name: "Anousheh Ansari",
    title: "Flight Engineer",
    desc: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space. `,
    img: anousheh_ansari,
  },
  victor: {
    name: "Victor Glover",
    title: "Pilot",
    desc: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer. `,
    img: victor_glover,
  },
  mark: {
    name: "Mark Shuttleworth",
    title: "Mission Specialist",
    desc: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.`,
    img: mark_shuttleworth,
  },
};

const Crew = () => {
  const [member, setMember] = useState("douglas");
  return (
    <main>
      <div className={styles.crew}>
        <div className={styles.leftContainer}>
          <div className={styles.left}>
            <h2>meet your crew</h2>
            <div className={styles.member}>
              <h2 className={styles.title}>{crewMembers[member].title}</h2>
              <h1 className={styles.name}>{crewMembers[member].name}</h1>
              <p className={styles.desc}>{crewMembers[member].desc}</p>
            </div>
            <div className={styles.nav}>
              <span
                onClick={() => setMember("douglas")}
                style={
                  member === "douglas"
                    ? { backgroundColor: "white", scale: 1.3 }
                    : null
                }
              ></span>
              <span
                onClick={() => setMember("anousheh")}
                style={
                  member === "anousheh"
                    ? { backgroundColor: "white", scale: 1.3 }
                    : null
                }
              ></span>
              <span
                onClick={() => setMember("victor")}
                style={
                  member === "victor"
                    ? { backgroundColor: "white", scale: 1.3 }
                    : null
                }
              ></span>
              <span
                onClick={() => setMember("mark")}
                style={
                  member === "mark"
                    ? { backgroundColor: "white", scale: 1.3 }
                    : null
                }
              ></span>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.right}>
            <Image
              src={crewMembers[member].img}
              alt={crewMembers[member].name}
              style={
                member === "mark" ? { transform: "rotateY(180deg)" } : null
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Crew;
