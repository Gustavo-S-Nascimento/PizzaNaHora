interface Pizza {
    id: number;
    nome: string;
    ingredientes: string;
    imagem: string;
    precos: {
        G: string;
        M: string;
    };
    categoria: string;
    descricao?: string;
}

const pizzasData: Pizza[] = [
    {
        id: 1,
        nome: "Peperroni e Burrata",
        ingredientes: "Mussarela, Calabresa, Manjericão e Tomates cerejas.",
        imagem: "./assets/images/pizzas/Peperroni.jpg",
        precos: {
            G: "R$65,00",
            M: "R$42,00"
        },
        categoria: "salgada",
    },
    {
        id: 2,
        nome: "Calabresa",
        ingredientes: "Mussarela, Calabresa e Cebola.",
        imagem: "./assets/images/pizzas/Pizza-de-calabresa 1.png",
        precos: {
            G: "R$50,00",
            M: "R$40,00"
        },
        categoria: "salgada",
    },
    {
        id: 3,
        nome: "Parma San Daniele",
        ingredientes: "Cebolinha, Tomate e Presunto.",
        imagem: "./assets/images/pizzas/pizzaVegetariana.jpg",
        precos: {
            G: "R$55,00",
            M: "R$45,00"
        },
        categoria: "vegetariana",
    },
    {
        id: 4,
        nome: "Portuguesa da casa",
        ingredientes: "Ovo, Tomate e Milho Fresco.",
        imagem: "./assets/images/pizzas/portuguesaCasa.jpg",
        precos: {
            G: "R$50,00",
            M: "R$40,00"
        },
        categoria: "salgada",
    },
    {
        id: 5,
        nome: "Queijo",
        ingredientes: "Parmesão, Tomates e Passas.",
        imagem: "./assets/images/pizzas/Queijo.jpg",
        precos: {
            G: "R$45,00",
            M: "R$30,00"
        },
        categoria: "vegetariana",
    },
];

export default pizzasData;