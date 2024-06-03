/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1ZGDqZY5lgp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { CardContent, Card } from "@/components/ui/card"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export default function Home() {
    return (
        <>
            <header className="bg-white shadow-sm w-full fixed">
                <div className="container mx-auto flex items-center justify-between py-4 px-6">
                    <a className="flex items-center" href="/">
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
                        <Avatar>
                            <AvatarImage src="/CatAvatar.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                    </nav>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 flex justify-center items-center rounded"><MenuIcon className="h-6 w-6" /></SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Pizzaria Chantly</SheetTitle>
                                    <Separator></Separator>
                                    <SheetDescription>
                                        <a
                                            className="inline-flex items-center justify-center rounded-md bg-red-500 px-6 py-3 text-white shadow-sm transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                            href="/menu"
                                        >
                                            Conheça o Cardápio
                                        </a>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
            <main>
                <section className="bg-gray-100 py-20" id="Home">
                    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
                        <div className="md:w-1/1 space-y-6">
                            <h1 className="text-4xl font-bold text-gray-800">Deliciosas Pizzas e Sanduíches</h1>
                            <p className="text-gray-600">
                                Experimente os melhores sabores da nossa pizzaria. Feitos com ingredientes frescos e de alta qualidade.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    className="inline-flex items-center justify-center rounded-md bg-red-500 px-6 py-3 text-white shadow-sm transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    href="/menu"
                                >
                                    Conheça o Cardápio
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                alt="Pizza"
                                className="rounded-lg shadow-lg"
                                height={400}
                                src="/Pizza-home.jpg"
                                style={{
                                    aspectRatio: "600/400",
                                    objectFit: "cover",
                                }}
                                width={600}
                            />
                        </div>
                    </div>
                </section>
                <section className="py-20 target:scroll-my-10" id="About">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <img
                                    alt="Sanduíche"
                                    className="rounded-lg shadow-lg"
                                    height={300}
                                    src="/PizzaCat.jpg"
                                    style={{
                                        aspectRatio: "600/400",
                                        objectFit: "cover",
                                    }}
                                    width={500}
                                />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-gray-800">Sobre a Pizzaria Chantly</h2>
                                <p className="text-gray-600">
                                    Fundada em 2010, a Pizzaria Chantly é um dos restaurantes mais populares da cidade. Nosso compromisso
                                    é servir pizzas e sanduíches deliciosos, feitos com ingredientes frescos e de alta qualidade.
                                </p>
                                <p className="text-gray-600">
                                    Acreditamos que a comida deve ser uma experiência prazerosa, por isso nos esforçamos para criar um
                                    ambiente acolhedor e confortável para nossos clientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-100 py-20" id="Menu">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Destaques do Cardápio</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card>
                                <img
                                    alt="Pizza Margherita"
                                    className="rounded-t-lg"
                                    height={300}
                                    src="/Pizza-Margherita.jpg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width={400}
                                />
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Pizza Margherita</h3>
                                    <p className="text-gray-600 mb-4">
                                        Massa fina, molho de tomate, queijo mozzarella e folhas de manjericão.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-red-500">R$ 39,90</span>
                                        <a
                                            className="inline-flex items-center justify-center rounded-md bg-red-500 px-4 py-2 text-white shadow-sm transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                            href="#"
                                        >
                                            Peça Agora
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <img
                                    alt="Sanduíche Club"
                                    className="rounded-t-lg"
                                    height={300}
                                    src="/Sanduiche-Club.jpg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width={400}
                                />
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Sanduíche Club</h3>
                                    <p className="text-gray-600 mb-4">Pão de forma, frango, bacon, alface, tomate e maionese.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-red-500">R$ 24,90</span>
                                        <a
                                            className="inline-flex items-center justify-center rounded-md bg-red-500 px-4 py-2 text-white shadow-sm transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                            href="#"
                                        >
                                            Peça Agora
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <img
                                    alt="Pizza Pepperoni"
                                    className="rounded-t-lg"
                                    height={300}
                                    src="/Pizza-Pepperoni.jpg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width={400}
                                />
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Pizza Pepperoni</h3>
                                    <p className="text-gray-600 mb-4">Massa fina, molho de tomate, queijo mozzarella e pepperoni.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-red-500">R$ 44,90</span>
                                        <a
                                            className="inline-flex items-center justify-center rounded-md bg-red-500 px-4 py-2 text-white shadow-sm transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                            href="#"
                                        >
                                            Peça Agora
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
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
        </>
    )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function CatIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 124.805 124.805"
        >
            <path d="M111.1,5.103c-1.8,0-3.5,0.3-5.199,1l-19.601,7.9c-7.5-2.7-15.5-4.1-23.8-4.1c-8.2,0-16.2,1.4-23.8,4.1l-19.6-7.9
		c-1.7-0.7-3.4-1-5.2-1c-7.7,0-13.9,6.2-13.9,13.9l0.1,48.4c0,0.399,0,0.8,0,1.101c2.2,28.699,29.6,51.199,62.3,51.199
		c32.8,0,60.2-22.5,62.3-51.199c0-0.4,0-0.701,0-1.101l0.1-48.5C125,11.302,118.8,5.103,111.1,5.103z M108.9,67.302
		c-1.5,20.4-21.9,36.4-46.4,36.4c-24.4,0-44.8-16-46.4-36.4L16,22.002l17.4,7.1c3.2,1.3,6.9,1.4,10.1,0.2c6-2.2,12.3-3.4,18.9-3.4
		s13,1.1,19,3.4c3.199,1.2,6.899,1.2,10.1-0.2l17.4-7.1V67.302z"/>
            <circle cx="42.3" cy="68.503" r="10" />
            <circle cx="82.7" cy="68.503" r="10" />
        </svg>
    )
}