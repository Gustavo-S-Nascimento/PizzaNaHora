import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { CatIcon } from "@/components/Structure/CatIcon";
import { MenuIcon } from "@/components/Structure/MenuIcon";
import Login from "./Login";

export default function Header() {
    return (
        <header className="bg-white shadow-sm w-full fixed">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <a className="flex items-center" href="/PizzaNaHora/">
                    <CatIcon className="h-8 w-8 text-red-500" />
                    <span className="ml-2 text-xl font-bold">Pizzaria Chantly</span>
                </a>
                <nav className="hidden flex justify-center items-center md:flex gap-5">
                    <a className="flex justify-center items-center h-8 text-gray-600 border p-[1px] border-transparent hover:text-white hover:border hover:p-[1px] hover:rounded hover:border-red-500 hover:bg-red-500 transition-all" href="#Home">
                        Início
                    </a>
                    <a className="flex justify-center items-center h-8 text-gray-600 border p-[1px] border-transparent hover:text-white hover:border hover:p-[1px] hover:rounded hover:border-red-500 hover:bg-red-500 transition-all" href="#About">
                        Sobre
                    </a>
                    <a className="flex justify-center items-center h-8 text-gray-600 border p-[1px] border-transparent hover:text-white hover:border hover:p-[1px] hover:rounded hover:border-red-500 hover:bg-red-500 transition-all" href="#Menu">
                        Destaques
                    </a>
                    <Login />
                </nav>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 flex justify-center items-center rounded"><MenuIcon className="h-6 w-6" /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Pizzaria Chantly</SheetTitle>
                                <Separator></Separator>
                                <SheetDescription>
                                    <Login />
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

