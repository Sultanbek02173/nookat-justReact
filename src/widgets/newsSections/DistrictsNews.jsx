import { CardComponent } from "../../features";
import './districtsNews.scss'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const DistrictsNews = () => {
    
    const { news } = useSelector((state) => state.news);
    const { setting } = useSelector((state) => state.setting);
    
    return (
        <section className="container">
            <div className="viewingNews">
                <h1 className="viewing-text">{setting ? setting[0]?.news_nookat : ''}</h1>
                {
                    news.map((item) => (
                        <Link key={item.id} to={`/news-detail/${item.id}`}>
                            <CardComponent 
                                image={item.image} 
                                date={item.date} 
                                title={item.title} 
                                description={item.description}
                            />
                        </Link>
                    ))  
               }
            </div>
        </section>
    );
}
