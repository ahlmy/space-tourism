"use client";
import { Button } from "@mui/material";
import Link from "next/link";

const ExploreButton = () => {
  return (
    <Link href={"/destination"}>
      <Button
        variant="contained"
        sx={{
          color: "var(--text-dark)",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "250px",
          fontSize: "1.5rem",
          height: "250px",
          transition: "all 0.2s ease 0s",
          ":hover": {
            backgroundColor: "rgba(250, 255, 255, 0.95)",
          },
          "@media (max-width: 800px)": {
            width: "200px",
            height: "200px",
          },
        }}
      >
        EXPLORE
      </Button>
    </Link>
  );
};
export default ExploreButton;
