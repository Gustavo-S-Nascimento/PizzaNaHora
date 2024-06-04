import { CatIcon } from "@/components/Icons/CatIcon";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center">
                        <CatIcon className="h-8 w-8 mr-2" />
                        <span className="text-xl font-bold">Pizzaria Delícia</span>
                    </div>
                    <nav className="mt-4 md:mt-0 space-x-6">
                        <a className="text-gray-400 hover:text-white" href="#Home">
                            Início
                        </a>
                        <a className="text-gray-400 hover:text-white" href="#About">
                            Sobre
                        </a>
                        <a className="text-gray-400 hover:text-white" href="#Menu">
                            Destaques
                        </a>
                    </nav>
                </div>
                <div className="mt-8 text-center text-gray-400">© 2024 Pizzaria Delícia. Todos os direitos reservados.</div>
            </div>
        </footer>
    );
}
