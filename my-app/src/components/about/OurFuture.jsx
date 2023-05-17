import { Player } from 'video-react';

const OurFuture = () => {
    return (
        <section className="our-future mt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 my-5">
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-5">
                        <h1 className="mb-3 title">Our Future Prespective<img className='my-4' src="./images/Line 1.png" alt="" /></h1>
                        <div className="boxes"                            >
                            <div className="box">
                                <img src="./images/Vector.svg" alt="" />
                                <span>
                                    <h6>Vision</h6>
                                    <p>To become the leading application service provider <br /> (ASP) focusing on front-end application delivered <br /> for Indonesia’s banking and fi nancial industry.</p>
                                </span>
                            </div>

                            <div className="box">
                                <img src="./images/Vector (1).svg" alt="" />
                                <span>
                                    <h6>Mission</h6>
                                    <p>To grow the business together with clients by <br /> providing enhanced services and wide delivery <br /> channel to end-users.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurFuture