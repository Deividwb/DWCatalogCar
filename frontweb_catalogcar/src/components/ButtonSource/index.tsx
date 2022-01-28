import './styles.css';

const ButtonBuscar = () =>{
    return(
        <div className='btn-container'>
            <div className='card-source'>
            <input type="text" placeholder='Digite sua busca' />                  
            
            <button className="btn btn-primary btn-buscar-container">
                <h6>Buscar</h6>
            </button>
            </div> 
            
        </div>
    );
}
export default ButtonBuscar;