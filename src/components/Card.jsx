const Card = ({user, handleRemove , id}) => {
  return (
    <>
      <div className="h-72 w-64 bg-zinc-200 rounded-lg flex items-center justify-center text-center flex-col">
        <div className="bg-zinc-100 -mt-12 rounded-full h-28 w-28 object-cover">
          <img className="rounded-full h-28 w-28" src={user.image} />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold mt-2 ">{user.name}</h1>
          <h2 className="text-sm text-zinc-600 text-center">{user.email}</h2>
          <h3 className="text-md text-zinc-600 mt-2 font-medium text-center ml-2 mr-2">
            {user.profession}
          </h3>
          <h4 className="text-xs text-center ml-2 mr-2">{user.bio}</h4>
        </div>
        <button
          onClick={() => handleRemove(id)}
          className="bg-red-600 mt-4 p-2 rounded-lg text-white"
        >
          Remove
        </button>
      </div>
     
    </>
  );
};

export default Card;
