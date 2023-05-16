const ContactUs = () => {
  return (
    <section className='contact-us my-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="my-5 text-center title">Contact Us<img className='mt-3' src="./images/Line 1.png" alt="" /></h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 my-5">
            <img src="./images/map.png" alt="" />
          </div>

          <div className="col-lg-6 my-5">
            <ul className="contact-us-menus">
              <li>
                <span><img src="./images/subtract.png" alt="" /></span>
                <div>
                  <strong>Alamat</strong>
                  <p>Jl. Halim Perdana Kusuma, Ring Road <br /> Bangkalan, Madura, Jawa Timur.</p>
                </div>
              </li>
              <li>
                <span><img src="./images/mail2.png" alt="" /></span>
                <div>
                  <strong>Email</strong>
                  <p>sekolahku@sch.id</p>
                </div>
              </li>
              <li>
                <span><img src="./images/phone.png" alt="" /></span>
                <div>
                  <strong>Telpon</strong>
                  <p>(031) 3092223</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs