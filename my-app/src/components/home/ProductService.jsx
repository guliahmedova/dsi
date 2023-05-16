import productServiceDatas from '../../datas/productServiceDatas';

const ProductService = () => {

    const productServiceCards = productServiceDatas.map((item) => {
        return (
            <div className='col-lg-4 col-md-6 col-sm-12 my-5' key={item.id}>
                <div className="custom-card">
                    <img src={item.image} alt="" />
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href="#" className='custom-btn'>Read More</a>
                </div>
            </div>
        )
    });

    return (
        <div className='home-product-service'>
            <h1>Product and Service</h1>
            <div className="container">
                <div className="row">
                    {productServiceCards}
                </div>
            </div>
        </div>
    )
}

export default ProductService;