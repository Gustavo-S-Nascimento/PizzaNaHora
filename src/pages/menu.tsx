import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aXaMEIFzkku
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
export default function Menu() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
            <a href="/"><Button className="my-2"><ArrowBigLeft></ArrowBigLeft></Button></a>
            <h1 className="text-3xl font-bold mb-8">Nosso Cardápio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Pizzas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/Pizza-Vegetariana.jpg"
                                alt="Pizza Vegetariana"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Pizza Vegetariana</h3>
                                <p className="text-gray-600 mb-4">Molho de tomate, queijo mozzarella, pimentão, cebola e cogumelos.</p>
                                <p className="text-lg font-bold">R$ 27,90</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/Pizza-Pepperoni.jpg"
                                alt="Pizza Pepperoni"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Pizza Pepperoni</h3>
                                <p className="text-gray-600 mb-4">Molho de tomate, queijo mozzarella e fatias de pepperoni.</p>
                                <p className="text-lg font-bold">R$ 44,90</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/Pizza-Margherita.jpg"
                                alt="Pizza Margherita"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Pizza Margherita</h3>
                                <p className="text-gray-600 mb-4">Molho de tomate, queijo mozzarella e folhas de manjericão.</p>
                                <p className="text-lg font-bold">R$ 39,90</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/Pizza-QuatroQueijos.webp"
                                alt="Pizza Quatro Queijos"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Pizza Quatro Queijos</h3>
                                <p className="text-gray-600 mb-4">
                                    Molho de tomate, queijo mozzarella, gorgonzola, provolone e parmesão.
                                </p>
                                <p className="text-lg font-bold">R$ 39,90</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Sanduíches</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/San-Frango.jpeg"
                                alt="Sanduíche de Frango"
                                width={300}
                                height={200}
                                className="w-full h-48 object-fill"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Sanduíche de Frango</h3>
                                <p className="text-gray-600 mb-4">Peito de frango grelhado, alface, tomate e maionese.</p>
                                <p className="text-lg font-bold">R$ 14,90</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/San-atum.jpg"
                                alt="Sanduíche de Atum"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Sanduíche de Atum</h3>
                                <p className="text-gray-600 mb-4">Atum, alface, tomate e maionese.</p>
                                <p className="text-lg font-bold">R$ 16,90</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/San-Vegetariano.jpeg"
                                alt="Sanduíche Vegetariano"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Sanduíche Vegetariano</h3>
                                <p className="text-gray-600 mb-4">Queijo, tomate, pepino, cebola e molho de ervas.</p>
                                <p className="text-lg font-bold">R$ 12,90</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/San-Rosbife.webp"
                                alt="Sanduíche de Rosbife"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Sanduíche de Rosbife</h3>
                                <p className="text-gray-600 mb-4">Rosbife, alface, tomate e mostarda.</p>
                                <p className="text-lg font-bold">R$ 18,90</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}