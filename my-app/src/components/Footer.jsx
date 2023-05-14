
const Footer = () => {
    return (
        <>
            <div className="container my-5">
                <footer className="text-lg-start footer">
                    <div className="container p-4 pb-0">
                        <section className="">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-xl-4 col-sm-12 mx-auto mt-3">
                                    <h6 className="text-uppercase">
                                        <div className="logo">
                                            <div className="big-text">
                                                <span style={{ color: "#85171a" }}>D</span>
                                                <span style={{ color: "#dc2025" }}>S</span>
                                                <span style={{ color: "#feba08" }}>I</span>
                                            </div>
                                            <div className="small-texts">
                                                <span style={{ fontWeight: 500 }}>dwidasa</span>
                                                <span style={{ fontWeight: 600 }}>samsara</span>
                                                <span style={{ fontWeight: 700 }}>indonesia</span>
                                            </div>
                                        </div>
                                    </h6>
                                    <strong>PT Dwidasa Samsara Indonesia</strong>
                                    <p>
                                        Ruko Jalur Sutera 29A No. 53 <br />
                                        Alam Sutera Serpong, Tangerang 15323
                                    </p>
                                </div>

                                <div className="col-lg-4 col-md-4 col-xl-4 col-sm-12 mx-auto mt-3 second-column">
                                    <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                                    <p> Phone : +62.21.5314.1135</p>
                                    <p> Fax : +62.21.5314.1135</p>
                                    <p> Email : community@dwidasa.com</p>
                                </div>

                                <div className="col-lg-4 col-md-4 col-xl-4 col-sm-12 mx-auto mt-3">
                                    <img className="footer-img" src="./images/footer.png" />
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
            <div className="copy-right text-center p-3">
                Copyright © 2015 - Dwidasa Samsara Indonesia
            </div>
        </>
    )
}

export default Footer