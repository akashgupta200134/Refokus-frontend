import Card from "./Card";
import Form from "./Form";

const Cards = () => {
  return (
    <>
      <div className="flex flex-wrap gap-16 justify-center  items-center mt-24 p-6">
        <Card/>
      </div>

      <div>
        <Form />
      </div>
    </>
  );
};

export default Cards;
