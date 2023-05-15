import ConsultantDatas from '../../datas/consultantDatas';

const Consultant = () => {
  const ConsultantEl = ConsultantDatas.map((item, i) => {
    return (
      <div className="col-lg-3 my-5" key={item.id}>
        <div className="card">
          <img className='my-4' src={item.cover} alt="" />
          <h5>{item.job}</h5>
          <h6>{item.name}</h6>
          <ul className='my-3'>
            {item.sosialMedies.map(s => <li key={i}><img src={s} alt="" /></li>)}
          </ul>
        </div>
      </div>
    )
  });

  return (
    <section className='consultant py-5 my-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="my-5 text-center title">Consultant<img className='mt-3' src="./images/Line 1.png" alt="" /></h1>
          </div>
        </div>

        <div className="row">
          {ConsultantEl}
        </div>
      </div>
    </section>
  )
}

export default Consultant