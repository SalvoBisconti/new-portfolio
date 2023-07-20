import { saveAs } from "file-saver";

export const saveFile = (): void => {
  saveAs("/Salvatore Bisconti Cv.pdf", "Salvatore Bisconti CV");
};

export const onClickAbout = (e: any, anchor: string): void => {
  e.preventDefault();
  let scrolling: any;
  scrolling = document.getElementById(anchor);
  scrolling.scrollIntoView();
};

export const linkTo = (url: string): any => {
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
};
