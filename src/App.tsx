import './App.css'
import '../style.css'
import { Header } from './components/Structure/header'
import { Options } from './components/Structure/options'
import { Pizzas } from './components/Pizzas/pizzas'
import { Sandubas } from './components/Sandubas/sandubas'
import '../style.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Options />
        <Pizzas />
        <Sandubas />
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
    </>
  )
}

export default App
