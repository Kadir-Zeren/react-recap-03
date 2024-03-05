import Name from "./Name";

const Cat = ({ name, img, color = "grey" }) => {
  return (
    <div>
      <Name name={name} />

      <img src={img} alt="" />

      <p>Color:{color}</p>
    </div>
  );
};

export default Cat;
