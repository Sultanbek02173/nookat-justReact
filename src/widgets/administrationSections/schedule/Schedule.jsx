import '../slide.scss';

export function Schedule({schedule}) {
  // const grafElement = [
  //   { heading: 'Эргешов Асилбек Камилович', microText: 'Мэр Ноукатского района', time: '12:00 - 13:00 приём' },
  //   { heading: 'Эргешов Асилбек Камилович', microText: 'Мэр Ноукатского района', time: '13:00 - 14:00 приём' },
  //   { heading: 'Эргешов Асилбек Камилович', microText: 'Мэр Ноукатского района', time: '14:00 - 15:00 приём' },
  //   { heading: 'Эргешов Асилбек Камилович', microText: 'Мэр Ноукатского района', time: '15:00 - 16:00 приём' },
  // ];
  return (
    <section>
      <div className="container">
        <div className="graf-container">
          <div className="graf-text">
            <h1>{schedule[0].title}</h1>
          </div>
          {schedule.map((item, index) => (
            <div className="gridCards" key={index}>
              <div className="card-left">
                <h2>{item.full_name}</h2>
                <p><i>{item.description}</i></p>
              </div>
              <div className="time">
                <h1>{item.date}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
