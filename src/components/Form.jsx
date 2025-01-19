const Form = () => {
  const submithandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className=" ">
      <form
        onSubmit={submithandler}
        className="flex justify-center items-center gap-10"
        action=""
      >
        <input
          className="rounded-md h-12 w-64  p-2 border border-black"
          type="text"
          placeholder="Name"
        />
        <input
          className="rounded-md h-12 w-64  p-2 border border-black"
          type="text"
          placeholder="Profession"
        />
        <input
          className="rounded-md h-12 w-64  p-2 border border-black"
          type="email"
          placeholder="Email"
        />
        <input
          className=" text-white bg-blue-500 h-12 w-32 rounded-lg"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Form;
