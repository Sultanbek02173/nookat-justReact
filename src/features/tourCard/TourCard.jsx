import './tourCard.scss';
import { MdArrowOutward } from 'react-icons/md';

export const TourCard = ({ el, openModalWithMap }) => {
    return (
        <div
            // style={{
            //     backgroundImage: `url(${el.image})`,
            // }}
            className="photo_card3">
                <img className="photo_cardImg3" src={el.image} alt="" />
            <div>
                <h4>{el.title}</h4>

                <div className="btn_3d">
                        <button
                            className="threeD"
                            onClick={() => openModalWithMap(el.link)}>
                                <a href={el.link} target='_blank'>
                                    {/* <img src={btn3d} alt="" />   */}
                                    <MdArrowOutward color='white' size={40} />

                                </a>
                        </button>
                    </div>
            </div>

        </div>
    );
}

