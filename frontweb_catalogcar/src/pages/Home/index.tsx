import './styles.css';
import { ReactComponent as CarImage } from 'assets/images/car-header 1.svg';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <div>
      <div>
        <CarImage />
        <div>
            <h3>O carro perfeito para você</h3>
            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
          </div>
              
            <div>
            <ButtonIcon/>
              <div>
                  <p>Comece agora a navegar</p>
              </div>
            </div>
          </div>
        </div> 
      );
};
export default Home;
