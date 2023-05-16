
const Footer = () => {
    return (
        <>
            <footer className="text-lg-start footer py-5">
                <div className="container p-4 pb-0">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-xl-4 col-sm-12 mx-auto mt-3">
                            <img src="./images/aboutHeroLogo.png" className="logo" alt="" />
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
                </div>
            </footer>
            <div className="copy-right text-center p-3">
                Copyright © 2015 - Dwidasa Samsara Indonesia
            </div>
        </>
    )
}

export default Footer