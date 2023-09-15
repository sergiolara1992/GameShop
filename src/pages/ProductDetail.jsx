import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import OnlyProduct from '../../components/OnlyProduct';



const ProductDetail = () => {

  

  const [productDetails, setProductDetails] = useState([])
  
  const params = useParams()
  
  
  async function fetchProductDetails() {
        
      const respuesta = await fetch(`http://localhost:3000/juegos/${params.id}`);
      const resultado = await respuesta.json();
      setProductDetails(resultado)
    }
    console.log(productDetails);

    useEffect(() => {
        fetchProductDetails ()
    }, [])

  return (
    <div>
      <OnlyProduct
        key={productDetails?.id}
        ProductDetail={productDetails}
        product={productDetails}
      />
    </div>
  );
}

export default ProductDetail
