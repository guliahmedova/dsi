import React from 'react'

const TechnologyHero = () => {
    return (
        <section className='technology-hero'>
            <div className="gray"></div>
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className='tech-header text-center'>
                            <h1 className='my-5'>“Knowledge” some way of future <br />
                                <strong>up-to-date in latest technology</strong></h1>
                            <a href="#" className='custom-btn'>Read More</a>
                            <div className='img-box'><img className='mt-5' src="./images/technologyHero.png" alt="" /></div>
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <ul className='tech-menu mb-5'>
                            <li><img src="./images/java.png" alt="" /></li>
                            <li><img src="./images/php.png" alt="" /></li>
                            <li><img src="./images/css_3.svg" alt="" /></li>
                            <li><img src="./images/html_5.png" alt="" /></li>
                            <li><img src="./images/microsoft.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologyHero