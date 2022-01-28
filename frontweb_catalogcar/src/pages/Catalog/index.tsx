import ButtonBuscar from 'components/ButtonSource';
import ProductCar from 'components/ProductCard';

const Catalog = () => {
  return (
    <div className="container my-4">
      
      <div >
        <ButtonBuscar />
      </div>
      <div className="row">
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCar />
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCar />
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCar />
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCar />
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCar />
      </div>
      
      </div>
    </div>
  );
};
export default Catalog;
