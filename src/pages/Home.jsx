import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("トップ");

  return (
    <>
      <Header selectedPage={selectedPage} onSelectPage={setSelectedPage} />
    </>
  );
}
