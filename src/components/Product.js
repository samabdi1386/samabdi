import { Link } from "react-router-dom"


const Product = ({ item }) => {
    return (
        <div className="col-lg-3">

            <div className="card" >
                <Link to={`/Produvts${item.id}`}>

                    <img src={item.images[0]} className="card-img-top" alt="..." />
                </Link>

                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Product;