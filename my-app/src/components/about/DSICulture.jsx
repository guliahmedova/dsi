import { Player } from 'video-react';

const DSICulture = () => {
  return (
    <section className='dsi-culture'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 my-5">
            <h1 className="mb-3">DSI Culture<img className='mt-3' src="./images/Line 2.png" alt="" /></h1>
            <p>
              Our commitment to innovation depends on everyone being comfortable sharing ideas and opinions. Every employee is a hands-on contributor, and everyone wears several hats. Because we believe that each DSI employee is an equally important part of our success.
              <br /> <br />
              We deeply understand that the average working person spends at least eight hours or even more, so we spend one third even half of our lives to work in a day. therefore we strive to provide a fun and positive environment in addition to a wide range of benefits to provide safety so they can enjoy working at Dwidasa Samsara Indonesia.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 my-5">
            <Player
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DSICulture