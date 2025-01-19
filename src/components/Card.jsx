const Card = () => {
    return (
        <div>
            <div className=" h-64 w-64 bg-zinc-200   rounded-lg  flex items-center justify-center text-center flex-col ">
                <div className=" bg-zinc-100  -mt-20 rounded-full h-28 w-28 object-cover ">
                    <img className="rounded-full h-28 w-28"
                        src="https://plus.unsplash.com/premium_photo-1737147325416-eee88ccb04f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
                <div className="text-center">
                    <h1 className="text-xl font-bold mt-2 ">
                    Akash
                    </h1>
                    <h2 className=" text-sm text-zinc-600 text-center ">
                  akash@gmail.com
                    </h2>
                    <h3 className="text-md text-zinc-600 mt-2 font-medium text-center ml-2 mr-2">
                   Web Developer
                    </h3>
                    <h4 className="  text-xs text-center ml-2 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                    </h4>
                </div>
                <button className="bg-red-600 mt-4  p-2 rounded-lg text-white">Remove</button>

            </div>
        </div>
    );
};

export default Card;
