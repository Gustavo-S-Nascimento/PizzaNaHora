export interface Pizza {
    id: number;
    nome: string;
    ingredientes: string;
    imagem: string;
    precos: {
        G: string;
        M: string;
    };
    categoria: string;
    descricao?: string; // Campo opcional para descrição da pizza
}

export interface Sanduiche {
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