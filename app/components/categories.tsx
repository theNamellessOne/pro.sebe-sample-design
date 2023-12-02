export function Categories() {
    return (
        <div className={"px-4 my-16"}>
            <div className={"flex w-full items-center justify-center"}>
                <h1 className={"text-4xl relative before:w-[200px] before:h-[2px] before:top-1/2 before:left-full before:translate-x-5 before:bg-gray-950 before:absolute inline-block after:w-[200px] after:h-[2px] after:top-1/2 after:right-full after:-translate-x-5 after:bg-gray-950 after:absolute"}>Lorem ipsum.</h1>
            </div>
        <div className={"flex p-4 my-16"}>
            <div className={"relative rounded-l overflow-hidden"}>
                <img src={"https://www.intimissimi.com/on/demandware.static/-/Library-Sites-IntimissimiContentLibrary/default/dw120ed83c/images/hp/splash/all_HP_PreHome_CW4123_Donna_int.jpg"}/>
                <h2 className={"text-6xl absolute text-white top-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}>for her</h2>
            </div>
            <div className={"relative rounded-r overflow-hidden"}>
                <img src="https://www.intimissimi.com/on/demandware.static/-/Library-Sites-IntimissimiContentLibrary/default/dw9a239729/images/hp/splash/all_HP_PreHome_CW4123_Uomo_intu.jpg" alt=""/>
                <h2 className={"text-6xl absolute text-white top-1/2 right-1/2 translate-x-1/2 translate-y-1/2"}>for him</h2>
            </div>
        </div>
        </div>
    );
}