"use client";
import { useCallback } from "react";
import { Divider } from "@mui/material";
import styles from "./Bodies.module.css";

const Bodies = ({ bodyName, setBodyName, bodyInfos }) => {
  const getDivider = useCallback(() => {
    return (
      <Divider
        component={"div"}
        sx={{ borderWidth: "1px", backgroundColor: "white" }}
      />
    );
  }, []);
  return (
    <>
      <ul className={styles.bodies}>
        <li className={styles.body} onClick={() => setBodyName("moon")}>
          moon
          {bodyName === "moon" ? getDivider() : ""}
        </li>
        <li className={styles.body} onClick={() => setBodyName("mars")}>
          mars
          {bodyName === "mars" ? getDivider() : ""}
        </li>
        <li className={styles.body} onClick={() => setBodyName("europa")}>
          europa
          {bodyName === "europa" ? getDivider() : ""}
        </li>
        <li className={styles.body} onClick={() => setBodyName("titan")}>
          titan
          {bodyName === "titan" ? getDivider() : ""}
        </li>
      </ul>
      <ul className={styles.info}>
        <h1 className={styles.infotitle}>{bodyInfos[bodyName].title}</h1>
        <p>{bodyInfos[bodyName].desc}</p>
        <Divider
          sx={{ borderColor: "rgba(255, 255, 255, 0.2)", mt: 2, mb: 1 }}
        />
        <div className={styles.details}>
          <div>
            <h5>AVG. DISTANCE</h5>
            <h2>{bodyInfos[bodyName].distance}</h2>
          </div>
          <div>
            <h5>EST. TRAVEL TIME</h5>
            <h2>{bodyInfos[bodyName].time}</h2>
          </div>
        </div>
      </ul>
    </>
  );
};
export default Bodies;
