/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1ZGDqZY5lgp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export default function Home() {
    return (
        <>
            <header className="bg-white shadow-sm w-full">
                <div className="container mx-auto flex items-center justify-between py-4 px-6">
                    <a className="flex items-center" href="/">
                        <PizzaIcon className="h-8 w-8 text-red-500" />
                        <span className="ml-2 text-xl font-bold">Pizzaria Delícia</span>
                    </a>
                    <nav className="hidden md:flex space-x-6">
                        <a className="text-gray-600 hover:text-gray-800" href="#">
                            Início
                        </a>
                        <a className="text-gray-600 hover:text-gray-800" href="#">
                            Cardápio
                        </a>
                        <a className="text-gray-600 hover:text-gray-800" href="#">
                            Sobre
                        </a>
                        <a className="text-gray-600 hover:text-gray-800" href="#">
                            Contato
                        </a>
                    </nav>
                    <div className="md:hidden">
                        <Button size="icon" variant="outline">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                </div>
            </header>
            <main>
                <section className="bg-gray-100 py-20">
                    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
                        <div className="md:w-1/1 space-y-6">
                            <h1 className="text-4xl font-bold text-gray-800">Deliciosas Pizzas e Sanduíches</h1>
                            <p className="text-gray-600">
                                Experimente os melhores sabores da nossa pizzaria. Feitos com ingredientes frescos e de alta qualidade.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    className="inline-flex items-center justify-center rounded-md bg-red-500 px-6 py-3 text-white shadow-sm transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    href="#"
                                >
                                    Peça Agora
                                </a>
                                <a
                                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-600 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                    href="#"
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
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <img
                                    alt="Sanduíche"
                                    className="rounded-lg shadow-lg"
                                    height={400}
                                    src="/Jovens-home.jpg"
                                    style={{
                                        aspectRatio: "600/400",
                                        objectFit: "cover",
                                    }}
                                    width={600}
                                />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-gray-800">Sobre a Pizzaria Delícia</h2>
                                <p className="text-gray-600">
                                    Fundada em 2010, a Pizzaria Delícia é um dos restaurantes mais populares da cidade. Nosso compromisso
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
                <section className="bg-gray-100 py-20">
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
                            <PizzaIcon className="h-8 w-8 mr-2" />
                            <span className="text-xl font-bold">Pizzaria Delícia</span>
                        </div>
                        <nav className="mt-4 md:mt-0 space-x-6">
                            <a className="text-gray-400 hover:text-white" href="#">
                                Início
                            </a>
                            <a className="text-gray-400 hover:text-white" href="#">
                                Cardápio
                            </a>
                            <a className="text-gray-400 hover:text-white" href="#">
                                Sobre
                            </a>
                            <a className="text-gray-400 hover:text-white" href="#">
                                Contato
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


function PizzaIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M15 11h.01" />
            <path d="M11 15h.01" />
            <path d="M16 16h.01" />
            <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
            <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
        </svg>
    )
}