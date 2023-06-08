"use client";
import Image from "next/image";
import styles from "./technology.module.css";
import { useState, useEffect } from "react";
import {
  launch_vehicle_landscape,
  launch_vehicle_portrait,
  space_capsule_landscape,
  space_capsule_portrait,
  spaceport_landscape,
  spaceport_portrait,
} from "@/assets/technology";

const techInfo = {
  capsule: {
    name: "Space capsule",
    desc: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.`,
    img_landscape: space_capsule_landscape,
    img_portrait: space_capsule_portrait,
  },
  spaceport: {
    name: "Spaceport",
    desc: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.`,
    img_landscape: spaceport_landscape,
    img_portrait: spaceport_portrait,
  },
  vehicle: {
    name: "Launch vehicle",
    desc: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!`,
    img_landscape: launch_vehicle_landscape,
    img_portrait: launch_vehicle_portrait,
  },
};

const Technology = () => {
  const [tech, setTech] = useState("vehicle");
  const [mobile, setMobile] = useState();
  useEffect(() => {
    const media = window.matchMedia("(max-width: 800px");
    media.addEventListener("change", (e) => {
      e.matches ? setMobile(true) : setMobile(false);
    });
  }, []);
  return (
    <main>
      <div className={styles.technology}>
        <div className={styles.leftContainer}>
          <div className={styles.left}>
            <h2>space launch 101</h2>
            <div className={styles.tech}>
              <div className={styles.nav}>
                <span
                  onClick={() => setTech("vehicle")}
                  style={
                    tech === "vehicle"
                      ? { backgroundColor: "white", color: "black" }
                      : null
                  }
                >
                  1
                </span>
                <span
                  onClick={() => setTech("capsule")}
                  style={
                    tech === "capsule"
                      ? { backgroundColor: "white", color: "black" }
                      : null
                  }
                >
                  2
                </span>
                <span
                  onClick={() => setTech("spaceport")}
                  style={
                    tech === "spaceport"
                      ? { backgroundColor: "white", color: "black" }
                      : null
                  }
                >
                  3
                </span>
              </div>
              <div className={styles.info}>
                <h2>THE TERMINOLOGY...</h2>
                <h1>{techInfo[tech].name}</h1>
                <p>{techInfo[tech].desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.right}>
            <Image
              src={
                mobile
                  ? techInfo[tech].img_landscape
                  : techInfo[tech].img_portrait
              }
              alt={techInfo[tech].name}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Technology;
