// import calendar from '../../shared/images/homePageImg/calendar.png'
import { PiCalendarDotsLight } from "react-icons/pi";
import './cardComponent.scss'
import { scrollToTop } from "../../shared";

export const CardComponent = ({ image, date, title, description }) => {

    return (
        <div className="base-components" onClick={scrollToTop}>
            <div className="base-components__parent-itemGrand">
                <div className="base-components__parent-item">
                    <div className="base-components__parent-item-blockOne">
                        <img src={image} alt='' />
                    </div>
                    <div className="base-components__parent-item-blockTwo">
                        <div className="base-components__parent-block">
                            {date && (
                                <div className="base-components__parent-item-blockTwo-data">
                                    {/* <img src={calendar} alt="icon" /> */}
                                    <PiCalendarDotsLight size={25} color="#227da5" />
                                    <h4>{date}</h4>
                                </div>
                            )}
                            <div className="base-components__parent-item-blockTwo-data">
                                <h1>{title}</h1>
                            </div>
                            <p
                                className="base-components__parent-item-blockTwo-data-default"
                                dangerouslySetInnerHTML={{ __html: 
                                description.length < 350 ?
                                description :
                                description.slice(0, 350) + '...'
                                 }}>
                            </p>
                        </div>
                    </div>

                </div>

                <p className="base-components__parent-itemGrand-description" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </div>
    );
}

