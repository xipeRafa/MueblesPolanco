import { useContext, useRef} from 'react';
import { FireStoreDataContext } from '../../context/FireStoreDataContext';
  import './auctionCard.css'








export const AuctionCard = ({ item }) => {
  const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
   
  const milisegundosComoFecha = (milisegundos) => {
      return formateador.format(new Date(milisegundos));
  }; 



  const { deleteById, setToggle, toggle } = useContext(FireStoreDataContext);



function QrFunction(){
      let typeNumber = 4;
      let errorCorrectionLevel = 'L';
      let qr = qrcode(typeNumber, errorCorrectionLevel);
      qr.addData(`https://xiperafa.github.io/adminPolancoMuebles/${item.id}`);
      qr.make();
      return <div dangerouslySetInnerHTML={{ __html: qr.createImgTag() }} />
}


  return (
    <div className="card shadow-sm " >
      <div
        style={{
          height: '180px',
          backgroundImage: `url(${item.imgUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="w-100 mt-4"
      />

      <div className="card-body p-4 ">

        {/*<p>Creado: {  new Date(item.duration).toLocaleDateString("es-ES", {year: 'numeric', month: 'long', day: 'numeric'})}</p>*/}
        <p> {milisegundosComoFecha(item.duration)}  </p>
        <hr />
        {item.id}

        <hr/>
        <p>Nombre: <span>{item.name}</span></p>
        {/*<p>para: <span>{item.para}</span></p>*/}

        <hr/>
        <p>Categoria: <span>{item.category}</span></p>
        
        <hr />

       {/* <p> marca: <span>{item.marca}</span></p>
       
        <p> tela: <span>{item.tela}</span></p>*/}
        

        <p> Descripción <span>{item.description}</span></p>


        <hr/>

        {/*<p> Stock Hermosillo: <span>{item.stockHermosillo}</span></p>*/}
        <p> Precio: <span>{item.price} $ </span></p>
        {/*<p> Tallas: </p>*/}
   {/*     {item?.talla?.map((el,i)=>(
                          <b key={i}><span>{el }, </span></b>
        ))}*/}




        <hr/> 

        
        <div className='btnBorrarInforme'> 
          <button
            className="btn btn-danger mb-2 mt-2"
            onClick={() => {
              if (window.confirm(`Quiere Borrar este Documento? ${item.name}`)) {
                  deleteById(item.id, item.imgName);
                  setToggle(!toggle);
                }
              }}
          >
            Borrar
          </button>

    
          <QrFunction />



         {/*<button className="btn btn-dark btn-sm mt-1">IMPRIMIR QR</button>*/}
        </div>

      </div>
      
    </div>
  );
};
