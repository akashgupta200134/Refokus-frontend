import Card from "./Card";

const Cards = ({ usersdata, handleRemove }) => {
  return (
    <div className="flex flex-wrap gap-16 justify-center items-center mt-24 p-6">
      {usersdata.map((user, index) => {
        return (
          <Card
            handleRemove={handleRemove}
            key={index} // Use unique key if available
            id={index}
            user={user} // Pass the individual user object
          />
        );
      })}
    </div>
  );
};

export default Cards;
