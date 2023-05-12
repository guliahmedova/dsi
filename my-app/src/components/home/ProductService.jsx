import productServiceDatas, { productServiceCards } from '../../datas/productServiceDatas';

const ProductService = () => {

    const productServiceCards = productServiceDatas.map((item) => {
        return (
            <div className='card' key={item.id}>
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <a href="#" className='btn'>Read More</a>
            </div>
        )
    });

    return (
        <div className='home-product-service'>
            <h1>Product and Service</h1>
            <div className="cards">
                {productServiceCards}
            </div>
        </div>
    )
}

export default ProductService;