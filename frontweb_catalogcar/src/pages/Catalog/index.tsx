import ButtonBuscar from 'components/ButtonBuscar';
import ProductCar from 'components/ProductCard';

const Catalog = () => {
  return (
    <div className="">
      <div>
        <ButtonBuscar />
      </div>

      <div>
        <ProductCar />
      </div>

      <div>
        <ProductCar />
      </div>
    </div>
  );
};
export default Catalog;
