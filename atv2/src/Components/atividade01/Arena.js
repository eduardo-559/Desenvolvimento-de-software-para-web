import React from "react";

export const Hero = ({ name, img }) => {
  return (
    <>
      <h3>{name}</h3>
      <img src={img} width={100} alt="batman" />
    </>
  );
};

export const Enemy = ({ name, img }) => {
  return (
    <>
      <h3>{name}</h3>
      <img src={img} width={100} alt="jocker" />
    </>
  );
};

const Arena = () => {
  return (
    <>
      <section style={{ display: "inline-block" }}>
        <Hero
          name="batman"
          img={
            "https://tse4.mm.bing.net/th?id=OIP.8cQTZsA3FVJR6MFc1BGDWwHaHa&pid=Api&P=0"
          }
        />

        <h1>X</h1>

        <Enemy
          name="Jocker"
          img={
            "https://tse3.mm.bing.net/th?id=OIP.5mSbVT_hpZ4HhF3xD7ABTwHaHa&pid=Api&P=0"
          }
        />
      </section>
    </>
  );
};

export default Arena;
