"use client";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "900px",
        height: "100vh",
        color: "black",
      }}
    >
      <ScaleLoader color="white" loading={true} />
    </div>
  );
};
export default Loading;
