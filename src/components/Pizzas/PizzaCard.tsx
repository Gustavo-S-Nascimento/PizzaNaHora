import React from 'react';

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

const PizzaCard: React.FC<{ pizza: Pizza }> = ({ pizza }) => {
    return (
        <div className="card">
            <div className="card-container">
                <div className="img">
                    <img src={pizza.imagem} alt={pizza.nome} width="150px" height="150px" />
                </div>
                <div className="info-pizza">
                    <div className="informativo">
                        <p className="nome">{pizza.nome}</p>
                        <span className="sabor">{pizza.ingredientes}</span>
                    </div>
                    <div className="precos">
                        <p className="G">{pizza.precos.G}</p>
                        <p className="M">{pizza.precos.M}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;