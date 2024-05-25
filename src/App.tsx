import './App.css'
import '../style.css'

function App() {

  return (
    <>
      <header className="header">
        <h1>Pizza na Hora  <i className="fa-solid fa-pizza-slice text-[#b92217]"></i></h1>
      </header>
      <main>
        <div className="buttons">
          <button id="pizzasButton">Pizzas</button>
          <button id="sandubasButton">Sandubas</button>
          <button id="facaButton">Faça a Sua</button>
        </div>

        <div className="pizzas">
          <div className="menu-pizzas">
            <div className="card">
              <div className="card-container">
                <div className="img">
                  <img src="./assets/images/pizzas/BBOFrango.jpg" alt="Pizza de Frango" width="150px" height="150px" />
                </div>
                <div className="info-pizza">
                  <div className="informativo">
                    <p className="nome">Churrasco de Frango</p>
                    <span className="sabor">Mussarela, Frango, Salsa e Cebola.</span>
                  </div>
                  <div className="precos">
                    <p className="G">GRANDE = R$60,00</p>
                    <p className="M">MEDIA = R$40,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-container">
                <div className="img">
                  <img src="./assets/images/pizzas/Peperroni.jpg" alt="Pizza de Peperroni" width="150px" height="150px" />
                </div>
                <div className="info-pizza">
                  <div className="informativo">
                    <p className="nome">Peperroni e Burrata</p>
                    <span className="sabor">Mussarela, Calabresa, Manjericão e Tomates cerejas.</span>
                  </div>
                  <div className="precos">
                    <p className="G">GRANDE = R$65,00</p>
                    <p className="M">MEDIA = R$42,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-container">
                <div className="img">
                  <img src="./assets/images/pizzas/Pizza-de-calabresa 1.png" alt="Pizza de Calabresa" width="150px" height="150px" />
                </div>
                <div className="info-pizza">
                  <div className="informativo">
                    <p className="nome">Calabresa</p>
                    <span className="sabor">Mussarela, Calabresa e Cebola.</span>
                  </div>
                  <div className="precos">
                    <p className="G">GRANDE = R$50,00</p>
                    <p className="M">MEDIA = R$40,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-container">
                <div className="img">
                  <img src="./assets/images/pizzas/pizzaVegetariana.jpg" alt="Pizza Vegetariana" width="150px" height="150px" />
                </div>
                <div className="info-pizza">
                  <div className="informativo">
                    <p className="nome">Parma San Daniele</p>
                    <span className="sabor">Cebolinha, Tomate e Presunto.</span>
                  </div>
                  <div className="precos">
                    <p className="G">GRANDE = R$55,00</p>
                    <p className="M">MEDIA = R$45,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-container">
                <div className="img">
                  <img src="./assets/images/pizzas/portuguesaCasa.jpg" alt="Pizza Portuguesa da Casa" width="150px" height="150px" />
                </div>
                <div className="info-pizza">
                  <div className="informativo">
                    <p className="nome">Portuguesa da casa</p>
                    <span className="sabor">Ovo, Tomate e Milho Fresco.</span>
                  </div>
                  <div className="precos">
                    <p className="G">GRANDE = R$50,00</p>
                    <p className="M">MEDIA = R$40,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-container">
                <div className="img">
                  <img src="./assets/images/pizzas/Queijo.jpg" alt="Pizza de Queijo" width="150px" height="150px" />
                </div>
                <div className="info-pizza">
                  <div className="informativo">
                    <p className="nome">Queijo</p>
                    <span className="sabor">Parmesão, Tomates e Passas.</span>
                  </div>
                  <div className="precos">
                    <p className="G">GRANDE = R$45,00</p>
                    <p className="M">MEDIA = R$30,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sandubas hidden">
          <div className="menu-sandubas">
            <div className="card">
              <div className="card-container">
                <img src="./assets/images/sandubas/bauru.jpg" alt="Big Kahuna Burger" width="150px" height="150px" />
                <div className="info-sanduba">
                  <div className="informativo">
                    <p className="nome">Ezequiel</p>
                    <span className="sabor">De tudo e mais um pouco...</span>
                  </div>
                  <div className="precos">
                    <p className="G">MONSTRO = R$188,80</p>
                    <p className="M">MINI = R$100,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-container">
                <img
                  src="https://scontent.cdninstagram.com/v/t39.30808-6/366015188_18373981669009479_3884318285615309201_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=rVx_hQcRD8gAX9GlM8L&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE2Mjk0OTg5NTk5NDgzNzY2NA%3D%3D.2-ccb7-5&oh=00_AfADu32qPW0KEfgiLHwabX-fcLMfwDDgnqiR5tbCeW-yPg&oe=65207EEC&_nc_sid=10d13b"
                  alt="Big Kahuna Burger" width="140px" height="150px" />
                <div className="info-sanduba">
                  <div className="informativo">
                    <p className="nome">Bacon Blast</p>
                    <span className="sabor">Queijo Cheddar e Mussarela, Bacon, Maionese de bacon.</span>
                  </div>
                  <div className="precos">
                    <p className="G">GRANDE = R$80,00</p>
                    <p className="M">MEDIO = R$60,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-container">
                <img
                  src="https://instagram.ffor42-1.fna.fbcdn.net/v/t39.30808-6/384326471_18384050002009479_5897813591138874934_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&_nc_ht=instagram.ffor42-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Wh5UOafobVoAX-Con42&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIwMTMzMzI3NTIyMDEyNjI3NA%3D%3D.2-ccb7-5&oh=00_AfDlwMHmiZoWosN64hRsFKuy-LcLJ2SQx9Cme689d-t6zQ&oe=651F2A37&_nc_sid=ee9879"
                  alt="Big Kahuna Burger" width="140px" height="150px" />
                <div className="info-sanduba">
                  <div className="informativo">
                    <p className="nome">X-Bacon</p>
                    <span className="sabor">Bacon, Carne Caseira e muito Cheddar.</span>
                  </div>
                  <div className="precos">
                    <p className="G">MEDIO = R$50,00</p>
                    <p className="M">PEQUENO = R$40,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-container">
                <img
                  src="https://instagram.ffor42-1.fna.fbcdn.net/v/t39.30808-6/382708240_18383325187009479_4195449953623160863_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&_nc_ht=instagram.ffor42-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Z3bMFpIbgT0AX9EbEU0&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE5ODQ5NTg0MzU3OTc2NDIyMw%3D%3D.2-ccb7-5&oh=00_AfDFBGwSlWuwC0pDGc73tFT8hB0ow-XK-epaAhX2GBFIhw&oe=65202A57&_nc_sid=b41fef"
                  alt="Big Kahuna Burger" width="140px" height="150px" />
                <div className="info-sanduba">
                  <div className="informativo">
                    <p className="nome">Bad Hombre</p>
                    <span className="sabor">BACON, BACON EM CUBOS, PASTA DE PIMETA JALAPEÑO E CEBOLA GRELHADA.</span>
                  </div>
                  <div className="precos">
                    <p className="G">GRANDE = R$70,00</p>
                    <p className="M">MEDIO = R$55,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-container">
                <img
                  src="https://instagram.ffor42-1.fna.fbcdn.net/v/t39.30808-6/372968969_18378786970009479_1623752134091735951_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&_nc_ht=instagram.ffor42-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=7PZOfzLBO48AX8-kXQI&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE4MTAyODY2Mzc4NDA2NTQ3NQ%3D%3D.2-ccb7-5&oh=00_AfCJb5Sm0h8ZHC4ghShvkZ6rCcr1XJ_YUETsYZXY1eUK4w&oe=651E4C8E&_nc_sid=b41fef"
                  alt="Big Kahuna Burger" width="140px" height="150px" />
                <div className="info-sanduba">
                  <div className="informativo">
                    <p className="nome">Houndred</p>
                    <span className="sabor">Bacon, Queijo Cheddar e MAIS BACON.</span>
                  </div>
                  <div className="precos">
                    <p className="G">GRANDE = R$55,00</p>
                    <p className="M">MEDIO = R$40,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-container">
                <img
                  src="https://instagram.ffor42-1.fna.fbcdn.net/v/t39.30808-6/368006236_18375903541009479_3195454415842244626_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&_nc_ht=instagram.ffor42-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=-7eLUzbWaroAX8KuhfN&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE2OTk3NDQ1NjYwNzIyNjIxNA%3D%3D.2-ccb7-5&oh=00_AfBz3EcasHqyItzzJXideKngCh6MlFDEX3su5JOat-KbsQ&oe=651E657B&_nc_sid=b41fef"
                  alt="Big Kahuna Burger" width="140px" height="150px" />
                <div className="info-sanduba">
                  <div className="informativo">
                    <p className="nome">The Hateful</p>
                    <span className="sabor">Bacon, Carne, Pasta de bacon e PIMENTA</span>
                  </div>
                  <div className="precos">
                    <p className="G">GRANDE = R$50,00</p>
                    <p className="M">MEDIO = R$40,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="facaSua hidden">
          <div className="seuPedido">
            <h2>Monte a sua Pizza:</h2>
            <div className="massa-section">
              <p>Massa:</p>
              <ul className="massa">
                <li>
                  <input type="radio" id="radioBase1" name="massa" value="borda" />
                  <label htmlFor="radioBase1">
                    <img className="img-icon"
                      src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-01.png?t=1670932317000"
                      alt="borda recheada" />
                  </label>
                </li>
                <li>
                  <input type="radio" id="radioBase2" name="massa" value="tradicional" />
                  <label htmlFor="radioBase2">
                    <img className="img-icon"
                      src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-02.png?t=1670932317000"
                      alt="massa tradicional" />
                  </label>
                </li>
                <li>
                  <input type="radio" id="radioBase3" name="massa" value="fina" />
                  <label htmlFor="radioBase3">
                    <img className="img-icon"
                      src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-03.png?t=1670932317000"
                      alt="massa fina" />
                  </label>
                </li>
              </ul>
            </div>
            <div className="molho-section">
              <p>Molho:</p>
              <ul className="molho">
                <li>
                  <input type="radio" id="radioRedSauce" name="molho" value="vermelho" />
                  <label htmlFor="radioRedSauce">
                    <img className="img-icon"
                      src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-05.png?t=1670932317000"
                      alt="molho vermelho" />
                  </label>
                </li>
                <li>
                  <input type="radio" id="radioYellowSauce" name="molho" value="amarelo" />
                  <label htmlFor="radioYellowSauce">
                    <img className="img-icon"
                      src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-04.png?t=1670932317000"
                      alt="molho vermelho" />
                  </label>
                </li>
              </ul>
            </div>
            <div className="tipo-section">
              <p>Tipo:</p>
              <ul className="tipo">
                <li>
                  <input type="checkbox" id="checkboxVeg" name="recheio" value="verdura" />
                  <label htmlFor="checkboxVeg" id="verdura">Verdura</label>
                </li>
                <li>
                  <input type="checkbox" id="checkboxNon-veg" name="recheio" value="carne" />
                  <label htmlFor="checkboxNon-veg" id="carne">Carne</label>
                </li>
              </ul>
            </div>
          </div>
          <button className="hidden" name="buttonCreate" id="buttonCreate">Finalizar o Pedido</button>
          <img src="./assets/images/pizza-meme.jpg" alt="Pizza meme" id="meme" />
        </div>
        <div id="pedido">
          <h2>Pedido Finalizado <i className="fa-solid fa-thumbs-up text-[#ffffff]"></i></h2>
        </div>
        <section id="screenPizza" className="hidden">
          <div id="imagens">
            <img id="imageBase"
              src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-03.png?t=1670932317000"
              alt="massa" />
            <img className="hidden" id="imageYellowSauce"
              src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-04.png?t=1670932317000"
              alt="molho amarelo" />
            <img className="hidden" id="imageRedSauce"
              src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-05.png?t=1670932317000"
              alt="molho vermelho" />
            <img className="hidden" id="imageVegNon-veg"
              src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/veg-nonveg.png?t=1670932317000"
              alt="Non-Veg" />
            <img className="hidden" id="imageVeg"
              src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Veg.png?t=1670932317000"
              alt="Non-Veg" />
            <img className="hidden" id="imageNon-veg"
              src="https://studio.code.org/v3/assets/ai36I_gY5JPKznE1ttg-CqVl0NhRRSPu1b34n7Ctx6c/Non-veg.png?t=1671892191000"
              alt="Non-Veg" />
          </div>
        </section>
      </main>
      <footer>
        <h2>Ajustado por <a href="https://github.com/Gustavo-S-Nascimento" target="_blank">Pascal</a></h2>
      </footer>
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
  )
}

export default App
