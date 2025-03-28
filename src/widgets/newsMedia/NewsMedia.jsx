import { useEffect } from "react";
import { CardComponent } from "../../features";
import './newsMedia.scss'
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


export const NewsMedia = () => {

    const { card } = useSelector((state) => state.card);
    const { setting } = useSelector((state) => state.setting);

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    
    return (
        <section className="container" id="NewsMedia">
            <div className="viewingNews">
                <h1 className="viewing-text">{setting ? setting[0]?.title_cmi : ''}</h1>
                {
                    card.map((item) => (
                        <a target="_blank" key={item.id} href={`${item.link}`}>
                            <CardComponent 
                                image={item.image_media} 
                                date={item.date_media} 
                                title={item.title_media} 
                                description={item.description_media} 
                            />
                        </a> 
                    ))  
               }
            </div>
        </section>
    );
}
