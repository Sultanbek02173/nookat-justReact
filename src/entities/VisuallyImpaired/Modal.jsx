import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseLetterSpacing,
  increaseLineSpacing,
  largeLetterSpacing,
  largeLineSpacing,
  normalLetterSpacing,
  normalLineSpacing,
  setDefaultFont,
  switchToSerifFont,
} from "../../app/store/reducers/visually";

const Modal = ({ setModal, mainTextSpeech }) => {
  const dispatch = useDispatch();
  return (
    <div className="visually__modal">
      <div className="visually__modal-head">
        <p>settings</p>
        <button onClick={() => {
          setModal(false);
        }}>&times;</button>
      </div>
      <div className="visually__modal-body">
        <div className="visually__content">
          <p>Межбуквенное расстояние</p>
          <div>
            <button onClick={() => {
              dispatch(normalLetterSpacing());
              mainTextSpeech('Интервал между буквами стандартный');
            }}>
              стандартный
            </button>
            <button onClick={() => {
              dispatch(increaseLetterSpacing());
              mainTextSpeech('Интервал между буквами средний');
            }}>
              средний
            </button>
            <button onClick={() => {
              dispatch(largeLetterSpacing());
              mainTextSpeech('Интервал между буквами большой');
            }}>
              Большой
            </button>
          </div>
        </div>
        <div className="visually__content">
          <p>Межстрочный интервал</p>
          <div>
            <button onClick={() => {
              dispatch(normalLineSpacing());
              mainTextSpeech('Межстрочный интервал стандартный');
            }}>
              стандартный
            </button>
            <button onClick={() => {
              dispatch(increaseLineSpacing())
              mainTextSpeech('Межстрочный интервал средний');
            }}>
              средний
            </button>
            <button onClick={() => {
              dispatch(largeLineSpacing());
              mainTextSpeech('Межстрочный интервал большой');
            }}>
              Большой
            </button>
          </div>
        </div>
        <div className="visually__content">
          <p>Шрифт</p>
          <div>
            <button onClick={() => {
              dispatch(setDefaultFont());
              mainTextSpeech('Шрифт без засечек');
            }}>
              без засечек
            </button>
            <button onClick={() => {
              dispatch(switchToSerifFont())
              mainTextSpeech('Шрифт c засечками');
            }}>
              с засечками
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
