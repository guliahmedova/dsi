const ClientSlider = () => {
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
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-sm-12 mb-5 px-5">
                                                <img className="d-block w-100" src="./images/image.png" alt="First slide" />
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <img className="quatos mb-3" src="./images/quote icon.png" alt="" />
                                                <p>Est tation latine aliquip id, mea ad tale illud
                                                    <br /> definitiones. Periculis omittantur necessitatibus <br /> eum ad, pro eripuit minimum comprehensam ne, <br /> usu cu stet prompta reformidans.</p>
                                                <span className="little">Connie Robertson at Google</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="carousel-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6 mb-5 px-5">
                                                <img className="d-block w-100" src="./images/cover (14).png" alt="First slide" />
                                            </div>
                                            <div className="col-lg-6">
                                                <img className="quatos mb-3" src="./images/quote icon.png" alt="" />
                                                <p>Est tation latine aliquip id, mea ad tale illud
                                                    <br /> definitiones. Periculis omittantur necessitatibus <br /> eum ad, pro eripuit minimum comprehensam ne, <br /> usu cu stet prompta reformidans.</p>
                                                <span className="little">Connie Robertson at Google</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <img src="./images/chevron_big_left.png" alt="" />
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <img src="./images/right.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientSlider;