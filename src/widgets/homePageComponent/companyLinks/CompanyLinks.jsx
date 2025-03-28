import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './companyLinks.scss'
import { useEffect, useState } from 'react';
import axiosApi from '../../../shared/api/AxiosApi';
import i18n from '../../../i18n/i18n';

export const CompanyLinks = () => {

    const [links, setLinks] = useState([])

    const fetchCompanyLinks = () => {
        axiosApi.get('/api/v1/gallery/PhotoMiniKg/')
        .then(({data}) => setLinks(data))
    }

    useEffect(() => {
        fetchCompanyLinks();

        i18n.on('languageChanged', fetchCompanyLinks)
        return () => {
            i18n.off('languageChanged', fetchCompanyLinks);
        }
    }, [])
    return (
        <div className='container'>
            <div className="links">
                <div className="row">
                    <Swiper
                        slidesPerView={4.5}
                        spaceBetween={20}
                        className="mySwiper"
                        breakpoints={{
                        1024: {
                            slidesPerView: 3.5,
                        },
                        565: {
                            slidesPerView: 2.5
                        },
                        0: {
                            slidesPerView: 1
                        }
                        }}
                    >
                    {
                        links.map((item, index) => (
                            <SwiperSlide key={index}>
                                <a href={item.link} target='_blank' key={index}>
                                    <div className='links-btn' >
                                        <img className='links-btn-img' src={item.image} alt="Company picture" />
                                        <p className='links-btn-text' dangerouslySetInnerHTML={{__html: item.title}}></p>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))
                    }
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
