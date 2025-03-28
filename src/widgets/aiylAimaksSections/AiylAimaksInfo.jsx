import { SliderComponent } from '../../features';
import './aiylAimaksInfo.scss';

export const AiylAimaksInfo = ({ title, text, images }) => {
    
    return (
        <section className="aiyl-con">
            <div className="info">
                <p className='info-title' >{text}</p>
                <div className="info-text">
                    <p className="text" dangerouslySetInnerHTML={{__html: title}}></p>
                </div>

                <div className='slider'>
                    <SliderComponent images={images}/>
                </div>

            </div>
        </section>
    );
}

