import { motion, AnimatePresence } from "framer-motion";
import "./baseComponents.scss";
import secondImg from "./images/stash_data-date-light.png";
import { useState } from "react";

export const BaseComponents = ({ item, index, changeIndex, img }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(!isAnimating);
    changeIndex(item.id);
  };

  return (
    <div onClick={(e) => { e.stopPropagation() }} className="base-components">
      <div key={item.id} className="base-components__parent-itemGrand">
        <div className="base-components__parent-item">
          <div className="base-components__parent-item-blockOne">
            <img src={item.image || img} alt='' />
          </div>
          <div className="base-components__parent-item-blockTwo">
            <div className="base-components__parent-block">
              {item.date && (
                <div className="base-components__parent-item-blockTwo-data">
                  <img src={secondImg} alt="icon" />
                  <h4>{item.date}</h4>
                </div>
              )}
              <div className="base-components__parent-item-blockTwo-data">
                <h1>{item.title}</h1>
              </div>
              <p
                className="base-components__parent-item-blockTwo-data-default"
                dangerouslySetInnerHTML={{ __html: 
                  item.description.length < 350 || isAnimating ?
                  item.description :
                  item.description.slice(0, 350) + '...'
                }}>
              </p>
            </div>
          </div>
          {item.id !== index ? (
            <button
              className="base-components__parent-itemGrand-button"
              onClick={handleToggle}
            >
              Подробнее
            </button>
          ) : ''}
        </div>

        <p className="base-components__parent-itemGrand-description" dangerouslySetInnerHTML={{ __html: item.description }}></p>

        <AnimatePresence initial={false} exitBeforeEnter>
          {item.id === index && (
            <motion.div
              style={{ overflow: "hidden" }}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ all: 0.5 }}
            >
              <p className="hidet-text" dangerouslySetInnerHTML={{ __html: item.description_detail }}></p>
            </motion.div>
          )}
        </AnimatePresence>

        {item.id === index ? (
          <button
            className="base-components__parent-itemGrand-button"
            onClick={handleToggle}
          >
            Закрыть
          </button>
        ) : ''}
      </div>
    </div>
  );
};