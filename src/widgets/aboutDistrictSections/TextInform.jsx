import './textInform.scss';
import { BaseComponents } from '../../features';
import { useState } from 'react';
 
export const TextInform = ({ currentTitle, currentText, person, link, bgImg }) => {
    const [index, setIndex] = useState();
    
    const changeIndex = (id) => {
        if(id === index){
            setIndex()
        }else{
            setIndex(id)
        } 
    }

    
    
    return (
        <section className="text-con">
            <div className="info">
                <div className="info-image">
                    <img src={bgImg} alt="" />
                    <p className="image-text" 
                     dangerouslySetInnerHTML={{ __html: currentTitle }}></p>
                </div>
                <p className='info-text' dangerouslySetInnerHTML={{ __html: currentText }}></p>
                { 
                    link && (
                    <div>
                        <iframe 
                            src={'https://inlnk.ru/jEAYoL'} 
                            width="100%" 
                            height="300" 
                            style={{ borderRadius: 20, border: 'none' }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    )
                }  
                {
                    person &&
                    person.map((item) => (
                        <div key={item.id} className="base-components__parent">
                            <BaseComponents item={item} img={item.img} index={index} changeIndex={changeIndex} />
                        </div>
                    ))
                }
            </div>

        </section>
    );
}
