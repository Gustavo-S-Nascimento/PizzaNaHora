export function Loading() {
    return <>
        <div id="loadingScreen" className="hidden">
            <div className="p">Pedido Solicitado</div>
            <img src="./assets/images/icons8-loading-truck.gif" alt="Icone gif" />
        </div>
        <div id="loader">
            <img src="./assets/images/pizzaria.webp" alt="Pizzaria Logo" width="250px" height="200px" />
            <h1>Pizza na hora</h1>
            <p>A melhor pizzaria do seu dia a dia, venha comer com a gente</p>
        </div>
    </>
}