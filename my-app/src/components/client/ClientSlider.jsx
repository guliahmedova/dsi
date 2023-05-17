import Slider from "react-slick";
import slides from "../../datas/sliderDatas";

const ClientSlider = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slide = slides.map(item => {
        return (
            <div key={item.id} className="custom-slide-container">
                <img className="slide-img" src={item.img} />
                <div className="slide-content">
                    <img className="my-3" src="./images/quote icon.svg" alt="" />
                    <p>Est tation latine aliquip id, mea ad tale illud <br /> definitiones. Periculis omittantur 
                        necessitatibus <br /> eum ad, pro eripuit
                         minimum comprehensam ne, <br /> usu cu stet prompta reformidans.</p>
                         <span>Connie Robertson at Google</span>
                </div>
            </div>
        )
    });

    return (
        <section className="client-slider py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="my-5 title">Testimonial<img className='mt-3' src="./images/Line 1.png" alt="" /></h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...settings}>
                            {slide}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientSlider;