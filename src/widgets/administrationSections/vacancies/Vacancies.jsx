import { useState } from 'react';
import '../../../app/styles/app.scss'
import '../slide.scss';
import { motion, AnimatePresence } from "framer-motion";

export const Vacancies = ({vacancies}) => {
  // const vacElement = [
  //   {
  //     heading: 'Специалист по документообороту',
  //     microText: 'Ведение и обработка официальной документации, организация архивов, взаимодействие с другими отделами.',
  //     details: 'Дополнительная информация: знание документооборота, владение 1С, работа с архивами.'
  //   },
  //   {
  //     heading: 'Главный бухгалтер',
  //     microText: 'Ведение бухгалтерского учета, составление финансовых отчетов, контроль бюджета.',
  //     details: 'Требования: опыт работы от 5 лет, знание налогового законодательства, работа с отчетностью.'
  //   },
  //   {
  //     heading: 'Юрист-консультант',
  //     microText: 'Правовая поддержка администрации, подготовка и проверка договоров, консультации по законодательным вопросам.',
  //     details: 'Требования: опыт работы от 5 лет, знание налогового законодательства, работа с отчетностью.'

  //   }  ];

  const [openEventId, setOpenEventId] = useState(null);

  const toggle = (id) => {
    setOpenEventId((prevId) => (prevId === id ? null : id));
  };

  const handleButtonClick = (e, id) => {
    e.stopPropagation();
    toggle(id);
  };

  return (
    <div className='container'>
      <div className="vac-container">
        <div className="vac-text">
          <h1>Доступные вакансии</h1>
        </div>
        {vacancies.map((item, index) => (
          <div className="gridCards" key={index}>
            <div className="card-left">
              <h2>{item.title}</h2>
              <p ><i dangerouslySetInnerHTML={{__html: item.description}}></i></p>
            </div>

            <AnimatePresence initial={false}>
              {openEventId === index && (
                <motion.div 
                  className="details-content"
                  style={{ overflow: "hidden" }}
                  initial={{ height: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0 }}
                  transition={{ height: { duration: 0.5 }, opacity: { duration: 0.2 } }}
                >
                  <p dangerouslySetInnerHTML={{__html: item.description_detail}}></p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="link">
              <button onClick={(e) => handleButtonClick(e, index)} className="events_button">
                <p>{openEventId === index ? "Закрыть" : "Подробнее"}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};