import { scrollToTop } from '../../shared';
import './newsCard.scss';
import { MdArrowOutward } from "react-icons/md";

export const NewsCard = ({img, description, date}) => {
    const truncateText = (text) => {
        return text.split(' ').slice(0, 12).join(' ') + (text.split(' ').length > 5 ? '...' : '');
    };

    return (
        <div className='news_cont' onClick={scrollToTop}>
            <div className="news_card">
                <img className='news_card_img' src={img} alt="" />
                <div className='button'>
                    <div className='btn_3d'>
                        <div className="threeD">
                            <MdArrowOutward color='white' size={40} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='news_text'>
                <h3>{date}</h3>
                <p className='textCont__text' dangerouslySetInnerHTML={{__html: truncateText(description)}}></p>
            </div>
        </div>
    );
}

