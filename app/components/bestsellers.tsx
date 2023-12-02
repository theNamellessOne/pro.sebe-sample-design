import {ArrowLeft, ArrowRight, PlusSquare} from "lucide-react";

export function Bestsellers() {
    const data = [1, 2, 3, 4];

    return (
        <div className={"px-4 my-16"}>
            <div className={"flex"}>
                <h1 className={"text-4xl grow relative"}>Lorem ipsum dolor.</h1>
                <button className={"border group flex border-black py-2 px-6 rounded-full hover:bg-black hover:text-white transition-all"}>
                    <p>
                        More
                    </p>
                    <p className={"ml-2 mr-2 group-hover:ml-4 group-hover:mr-0 transition-all"}>
                        →
                    </p>
                </button>
            </div>
        <div className={"flex gap-4 my-16"}>
            {data.map(i => {
                return (
                    <div key={i} className={"flex rounded flex-col bg-gray-600 h-[450px] grow"}>
                        <div className={"bg-gray-700 w-full h-3/4"}></div>
                        <div className={"w-full h-1/4 text-white flex flex-col justify-between p-4"}>
                            <div className={"flex w-full items-center justify-between"}>
                                <h3 className={"text-lg"}>299.00 UAH</h3>
                                <PlusSquare/>
                            </div>

                            <div className={"flex w-full gap-1 items-end"}>
                                <div className={"rounded-full border-white border bg-red-800 h-6 w-6"}></div>
                                <div className={"rounded-full border-white border bg-teal-800 h-5 w-5"}></div>
                                <div className={"rounded-full border-white border bg-orange-600 h-5 w-5"}></div>
                                <div className={"rounded-full border-white border bg-black h-5 w-5"}></div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        </div>
    );
}