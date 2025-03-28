import { SliderComponent } from "../../features";
import { NewsDescription } from "../../widgets";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailNews } from "../../app/store/reducers/newsSlice";
import i18n from "../../i18n/i18n";

export const NewsDetail = () => { 

    const { id } = useParams();
    const dispatch = useDispatch();
    const { newsDeatil } = useSelector((state) => state.news);

    const fetchNewsDetail = () => {
        dispatch(fetchDetailNews(+id))
    }
    useEffect(() => {
        fetchNewsDetail();
        
        i18n.on('languageChanged', fetchNewsDetail);
        return () => {
            i18n.off('languageChanged', fetchNewsDetail);
        };
    }, []);  

    
    
    return (
        <div className="container">
            <NewsDescription news={newsDeatil}/>
            <SliderComponent images={newsDeatil?.img} />
        </div>
    );
}

