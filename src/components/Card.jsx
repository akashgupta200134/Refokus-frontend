const Card = () => {
    return (
        <div>
            <div className=" h-64 w-64 bg-zinc-200  rounded-lg  flex items-center justify-center text-center flex-col ">
                <div className=" bg-zinc-100 -mt-28 rounded-full h-20 w-20 object-cover ">
                    <img className="rounded-full h-20 w-20"
                        src="https://media.istockphoto.com/id/2150988877/photo/professional-man-working-on-laptop-in-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=LN1RZZFSzq2ceTHlM8y05p3jPcuFelJgSU_irNeBjS4="
                    />
                </div>
                <div className="text-center mt-20">
                    <h1 className="text-xl font-bold -mt-12">
                        Akash
                    </h1>
                    <h2>
                        Web Developer
                    </h2>

                </div>

            </div>
        </div>
    );
};

export default Card;
