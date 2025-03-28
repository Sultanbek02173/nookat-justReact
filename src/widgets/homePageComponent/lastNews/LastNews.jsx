import { NewsCard } from '../../../features';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './lastNews.scss';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../../app/store/reducers/newsSlice';
import i18n from '../../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { scrollToTop } from '../../../shared';

export const LastNews = () => {
    
    const dispatch = useDispatch();

    const { news } = useSelector((state) => state.news);
    const { setting } = useSelector((state) => state.setting);
    const { t } = useTranslation();

    const handleLanguageChange = () => {
        dispatch(fetchNews());
    };

    useEffect(() => {
        handleLanguageChange();

        i18n.on('languageChanged', handleLanguageChange);
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [dispatch]);

    

    return (
        <section className='container lastNews_section'>
            <h2 className='cont_title'>{setting ? setting[0]?.end_news : ''}</h2>
            <Swiper
                className="mySwiper"
                slidesPerView={2.5}
                spaceBetween={20}
                breakpoints={{
                    1024: {
                        slidesPerView: 2.5,
                    },
                    768: {
                        slidesPerView: 1.5,
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}>
                {
                    news &&
                    news.map(item => (
                        <SwiperSlide className='sliderItem' key={item.id}>
                            <Link to={`/news-detail/${item.id}`}>
                                <NewsCard 
                                    img={item.image} 
                                    description={item.description} 
                                    date={item.date}
                                />
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
                 
            <Link to={'/news'}><button onClick={scrollToTop} className='newsLink'>{t('last_news')}</button></Link>
        </section>
    );
}