

const News = ({NewsDetail}) => {
  return (

    <div className="container review">

    <div className="newsDetail">

      <img className="imgsNew" src={NewsDetail && NewsDetail.imagen} />
    </div>
    <div>
       <h3 >
          {NewsDetail && NewsDetail.nombre}
        </h3>
        <p >
          {NewsDetail && NewsDetail.descripcion}
        </p>

      

    </div>
    </div>
  )
}

export default News
