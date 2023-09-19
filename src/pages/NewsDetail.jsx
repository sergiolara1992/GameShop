import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import News from "../../components/News"



const NewsDetail = () => {

  const [newsDetails, setNewsDetails] = useState([])

  const params = useParams()

  async function fetchNewsDetails() {

    const respuesta = await fetch(
      `https://newsjson-production.up.railway.app/blog/${params.id}`
    );
    const resultado = await respuesta.json();
    setNewsDetails(resultado)
  }
 

  useEffect(() => {
    fetchNewsDetails()
    
  }, [])
  
  return (
    <div>

      <News key={newsDetails?.id} NewsDetail={newsDetails} />
      
    </div>
  )
}

export default NewsDetail
