import javaspecialist from '../../datas/javaspecialist';

const JavaSpecialist = () => {
  const MobileSpecialistel = javaspecialist.map((item, i) => {
    return (
      <div className="col-lg-3 my-5" key={item.id}>
        <div className="card">
          <img className='my-4' src={item.cover} alt="" />
          <h5>{item.job}</h5>
          <h6>{item.name}</h6>
          <ul className='my-3'>
            {item.sosialMedies.map((s, index) => <li key={index + 85}><img src={s} alt="" /></li>)}
          </ul>
        </div>
      </div>
    )
  });

  return (
    <section className='MobileSpecialist py-5 mb-5' style={{backgroundColor: "#EEF3F1"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="my-2 text-center title">Java Specialist<img className='mt-3' src="./images/Line 1.png" alt="" /></h1>
          </div>
        </div>

        <div className="row">
          {MobileSpecialistel}
        </div>
      </div>
    </section>
  )
}

export default JavaSpecialist