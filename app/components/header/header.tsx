import {Search, ShoppingCart} from "lucide-react";

export function Header() {
    return (
        <header className={"bg-white p-4 py-7 lg:px-16 border-b flex gap-12 items-center"}>
            <h1 className={"text-4xl"}>/logo</h1>
            <div className={"flex grow gap-8 text-lg text-gray-700"}>
                <p className={"text-gray-950 relative after:w-full after:h-0.5 after:absolute after:bg-gray-950 after:-bottom-0.5 after:left-0"}>Home</p>
                <p>Catalog</p>
                <p>About</p>
            </div>

            <div className={"flex gap-4"}>
                <Search />
                <ShoppingCart />
            </div>
        </header>
    );
}