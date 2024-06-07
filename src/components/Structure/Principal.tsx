import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Slide, Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function Principal() {
    return (
        <main>
            <section className="bg-gray-100 py-32" id="Home">
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
                    <div className="md:w-1/1 space-y-6">
                        <h1 className="text-4xl font-bold text-gray-800">Deliciosas Pizzas e Sanduíches</h1>
                        <p className="text-gray-600">
                            Experimente os melhores sabores da nossa pizzaria. Feitos com ingredientes frescos e de alta qualidade.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                className="inline-flex items-center justify-center rounded-md bg-red-500 px-6 py-3 text-white shadow-sm transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                to="/menu"
                            >
                                Conheça o Cardápio
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <Fade delay={200}>
                            <img
                                alt="Pizza"
                                className="rounded-lg shadow-lg"
                                height={400}
                                src="./Pizza-home.jpg"
                                style={{
                                    aspectRatio: "600/400",
                                    objectFit: "cover",
                                }}
                                width={600} />
                        </Fade>
                    </div>
                </div>
            </section>
            <Slide triggerOnce={true}>
                <section className="py-20 target:scroll-my-10" id="About">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <img
                                    alt="Sanduíche"
                                    className="rounded-lg shadow-lg"
                                    height={300}
                                    src="./PizzaCat.jpg"
                                    style={{
                                        aspectRatio: "600/400",
                                        objectFit: "cover",
                                    }}
                                    width={500} />
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
            </Slide>
            <section className="bg-gray-100 py-20" id="Menu">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Destaques do Cardápio</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Slide triggerOnce cascade damping={0.1} direction="right">
                            <Card>
                                <img
                                    alt="Pizza Margherita"
                                    className="rounded-t-lg"
                                    height={300}
                                    src="./Pizza-Margherita.jpg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width={400} />
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
                                    src="./Sanduiche-Club.jpg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width={400} />
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
                                    src="./Pizza-Pepperoni.jpg"
                                    style={{
                                        aspectRatio: "400/300",
                                        objectFit: "cover",
                                    }}
                                    width={400} />
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
                        </Slide>
                    </div>
                </div>
            </section>
        </main >
    );
}
