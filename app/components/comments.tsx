import {Quote} from "lucide-react";

export function Comments() {
    const data = [
        {
            author: "suka",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores dolorem eligendi exercitationem facilis laboriosam nihil officiis quod rerum temporibus."
        },
        {
            author: "suka",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores dolorem eligendi exercitationem facilis laboriosam nihil officiis quod rerum temporibus."
        },
        {
            author: "suka",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores dolorem eligendi exercitationem facilis laboriosam nihil officiis quod rerum temporibus."
        },
    ]

    return (
        <div className={"px-4 my-16"}>
            <div className={"flex px-4"}>
                <h1 className={"text-4xl grow relative"}>Lorem ipsum dolor.</h1>
                <button className={"border group flex border-black py-2 px-6 rounded-full hover:bg-black hover:text-white transition-all"}>
                    <p>
                        Write a Review
                    </p>
                </button>
            </div>

            <div className={"flex p-4 my-16 gap-4"}>
                {data.map((i, idx) => {
                    return (
                        <div key={idx} className={"flex rounded p-4 grow bg-gray-400 flex-col h-[200px]"}>
                            <h2 className={"text-xl mb-2"}>@{i.author}</h2>
                            <div className={"flex"}>
                            <Quote/>
                            <p className={"italic ml-2"}>{i.content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}