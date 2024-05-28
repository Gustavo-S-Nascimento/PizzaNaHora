import React from 'react';

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

const SanduicheCard: React.FC<{ sanduiche: Sanduiche }> = ({ sanduiche }) => {
    const { nome, ingredientes, imagem, precos } = sanduiche;

    return (
        <div className="card">
            <div className="card-container">
                <img src={imagem} alt={nome} width="150px" height="150px" />
                <div className="info-sanduiche">
                    <div className="informativo">
                        <p className="nome">{nome}</p>
                        <span className="sabor">{ingredientes}</span>
                    </div>
                    <div className="precos">
                        <p className="G">GRANDE = {precos.G}</p>
                        <p className="M">MEDIO = {precos.M}</p>
                        {precos.P && <p className="P">PEQUENO = {precos.P}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SanduicheCard;