import { useDispatch } from "react-redux";
import i18n from "../../i18n/i18n";
import { DistrictsNews, NewsMedia } from "../../widgets";
import { fetchNews } from "../../app/store/reducers/newsSlice";
import { useEffect } from "react";
import { fetchMediaNews } from "../../app/store/reducers/viewSlice";

export const NewsPage = () => {
    const dispatch = useDispatch();

    const fetchDistrict = () => {
        dispatch(fetchNews());
        dispatch(fetchMediaNews());
    };

    useEffect(() => {
        fetchDistrict();

        i18n.on('languageChanged', fetchDistrict);
        return () => {
            i18n.off('languageChanged', fetchDistrict);
        };
    }, [dispatch]);
    return (
        <div>
            <DistrictsNews />
            <NewsMedia />
        </div>
    );
}
