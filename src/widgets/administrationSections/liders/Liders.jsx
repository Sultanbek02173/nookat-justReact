// import { SliderComponent } from '../../../features'
// import ru from '../../../shared/images/adminPage/ru.png'
// import ru2 from '../../../shared/images/adminPage/ru2.png'
// import ru3 from '../../../shared/images/adminPage/ru3.png'
import '../../../app/styles/app.scss'
import '../slide.scss';


export function Liders({managers}) {

  // const ruimage=[
  //   {image: ru, name: 'Эргешов Асилбек Камилович', status:'Мэр Ноукатского района'},
  //   {image: ru2, name: 'Эргешов Асилбек Камилович', status:'Мэр Ноукатского района'},
  //   {image: ru3, name: 'Эргешов Асилбек Камилович', status:'Мэр Ноукатского района'},
  //   {image: ru2, name: 'Эргешов Асилбек Камилович', status:'Мэр Ноукатского района'},
  // ]
  return (
    <section className='container'>
        {managers.map((item) => (
          <div className="grid-ru" key={item.id}>
            <div className="ru-cards">
              <img src={item.image} className='img-ru'/>

            <div className="ru-names">
              <h2 id='name-ru'>{item.full_name}</h2>
              <p id='status-ru'><i>{item.job_title}</i></p>
            </div>
              </div>
          </div>
        ))}
      {/* <SliderComponent /> */}
    </section>
  )
}
