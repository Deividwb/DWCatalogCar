import ButtonBuscar from "components/ButtonBuscar";
import {ReactComponent as CarCatalogImg} from 'assets/images/car-card 1.svg';

const Catalog = () => {
    return(
        <div>
            <div>
                <div>
                    <ButtonBuscar/>
                </div>
            </div>
            <div>
                <div>
                    <CarCatalogImg/>
                </div>
                <div>
                    <h3>Audi Supra TT</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div>
                    <button className="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    );
}
export default Catalog;