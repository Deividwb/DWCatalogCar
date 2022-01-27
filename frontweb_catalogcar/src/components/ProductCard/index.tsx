import './styles.css';
import {ReactComponent as CarCatalogImg} from 'assets/images/car-card 1.svg';


const ProductCar = () => {
    return(
        <div className='base-card product-card'>            
            <div className='card-container'>
                <div className='card-img'>
                    <CarCatalogImg/>
                </div>
                <div className='card-text'>
                    <h3>Audi Supra TT</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div className='btn-buy'>
                    <button className="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    );
}
export default ProductCar;