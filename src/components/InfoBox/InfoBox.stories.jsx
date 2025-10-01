import InfoBox from "./InfoBox.atom";

export default {
  title: "Components/InfoBox",
  component: InfoBox,
};

export const Default = {};

export const WithChild = () => {
  return (
    <InfoBox>
      <p>This is a paragraph child</p>
    </InfoBox>
  );
};

export const WithChildren = () => {
  const styleOverride = {
    width: "500px",
    height: "200px",
    backgroundColor: "#2c2c2c",
    color: "lightblue",
    padding: "0 20px",
  };
  return (
    <InfoBox styling={styleOverride}>
      <h1>Title child</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum
        dolores exercitationem veritatis, aspernatur possimus. Quidem nihil quae
        rerum tenetur id alias rem aut! Recusandae facilis necessitatibus
        debitis, id atque quam magnam! Rerum, facere molestias voluptas
        praesentium dolorum, ipsam consectetur, saepe exercitationem nulla ex
        soluta vel a ipsa tempora cum!
      </p>
    </InfoBox>
  );
};
