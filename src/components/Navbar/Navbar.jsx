"use client";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { logo, icon_close, icon_hamburger } from "@/assets/shared";
import { Divider } from "@mui/material";
import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const dividerLink = useCallback(() => {
    return <Divider sx={{ borderColor: "white", borderWidth: "1px" }} />;
  }, []);
  const pathName = usePathname();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const linksRef = useRef();
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image src={logo} alt="logo" priority={true} />
        </Link>
      </div>
      <div className={styles.line}>
        <Divider
          sx={{ borderColor: "rgba(255, 255, 255, 0.2)", borderWidth: "1px" }}
        />
      </div>
      <div className={styles.links} ref={linksRef} mobile="">
        <div>
          <Link className={styles.link} href={"/"} data-number="00">
            Home
          </Link>
          {pathName === "/" ? dividerLink() : ""}
        </div>
        <div>
          <Link className={styles.link} href={"/destination"} data-number="01">
            Destination
          </Link>
          {pathName === "/destination" ? dividerLink() : ""}
        </div>
        <div>
          <Link className={styles.link} href={"/crew"} data-number="02">
            crew
          </Link>
          {pathName === "/crew" ? dividerLink() : ""}
        </div>
        <div>
          <Link className={styles.link} href={"/technology"} data-number="03">
            technology
          </Link>
          {pathName === "/technology" ? dividerLink() : ""}
        </div>
      </div>
      <div
        className={styles.hamburger}
        onClick={() => {
          if (isHamburgerOpen) {
            linksRef.current.removeAttribute("style");
            setIsHamburgerOpen(false);
          } else if (!isHamburgerOpen) {
            linksRef.current.style.visibility = "visible";
            linksRef.current.style.opacity = "1";
            setIsHamburgerOpen(true);
          }
        }}
      >
        {isHamburgerOpen ? (
          <Image src={icon_close} alt="close" />
        ) : (
          <Image src={icon_hamburger} alt="hamburger" />
        )}
      </div>
    </div>
  );
};
export default Navbar;
