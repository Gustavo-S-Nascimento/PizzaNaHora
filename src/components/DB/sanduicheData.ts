interface Sanduiche {
    id: number;
    nome: string;
    ingredientes: string;
    imagem: string;
    precos: {
        G: string;
        M: string;
        P?: string;
    };
}

const Sanduiche: Sanduiche[] = [
    {
        id: 1,
        nome: "Ezequiel",
        ingredientes: "De tudo e mais um pouco...",
        imagem: "./assets/images/sandubas/bauru.jpg",
        precos: {
            G: "R$188,80",
            M: "R$100,00"
        },
    },
    {
        id: 2,
        nome: "Bacon Blast",
        ingredientes: "Queijo Cheddar e Mussarela, Bacon, Maionese de bacon.",
        imagem: "https://scontent.cdninstagram.com/v/t39.30808-6/366015188_18373981669009479_3884318285615309201_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=rVx_hQcRD8gAX9GlM8L&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE2Mjk0OTg5NTk5NDgzNzY2NA%3D%3D.2-ccb7-5&oh=00_AfADu32qPW0KEfgiLHwabX-fcLMfwDDgnqiR5tbCeW-yPg&oe=65207EEC&_nc_sid=10d13b",
        precos: {
            G: "R$80,00",
            M: "R$60,00"
        },
    },
    {
        id: 3,
        nome: "X-Bacon",
        ingredientes: "Bacon, Carne Caseira e muito Cheddar.",
        imagem: "https://instagram.ffor42-1.fna.fbcdn.net/v/t39.30808-6/384326471_18384050002009479_5897813591138874934_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&_nc_ht=instagram.ffor42-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Wh5UOafobVoAX-Con42&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIwMTMzMzI3NTIyMDEyNjI3NA%3D%3D.2-ccb7-5&oh=00_AfDlwMHmiZoWosN64hRsFKuy-LcLJ2SQx9Cme689d-t6zQ&oe=651F2A37&_nc_sid=ee9879",
        precos: {
            G: "R$50,00",
            M: "R$40,00"
        },
    },
    {
        id: 4,
        nome: "Bad Hombre",
        ingredientes: "BACON, BACON EM CUBOS, PASTA DE PIMETA JALAPEÑO E CEBOLA GRELHADA.",
        imagem: "https://instagram.ffor42-1.fna.fbcdn.net/v/t39.30808-6/382708240_18383325187009479_4195449953623160863_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&_nc_ht=instagram.ffor42-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Z3bMFpIbgT0AX9EbEU0&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE5ODQ5NTg0MzU3OT",
        precos: {
            G: "R$50,00",
            M: "R$40,00"
        },
    }
];

export default Sanduiche;