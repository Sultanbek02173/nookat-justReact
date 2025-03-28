import './gallery.scss'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollToTop } from '../../../shared/hooks/scrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArchivalPhotos, fetchNewShapes, fetchOshTour } from '../../../app/store/reducers/gallerySlice';
import { useTranslation } from 'react-i18next';

export const Gallery = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { newShapes, archivalPhotos, oshTour,  } = useSelector((state) => state.gallery);
    const { setting } = useSelector((state) => state.setting);
    
    useEffect(() => {
        dispatch(fetchNewShapes());
        dispatch(fetchArchivalPhotos());
        dispatch(fetchOshTour());
      }, [dispatch]);
    return (
        <div className='container'>
            <div className="gallery">
                <h1 className="gallery-text">{setting ? setting[0]?.gallery : ''}</h1>
                <div className="row">
                    <div className="col-4">
                        {
                            newShapes.filter((item) => item.id < 3).map((item) => (
                                <img key={item.id} src={item.image} alt="" className='gallery-img'/>
                            ))
                        }
                        <Link to={`/gallery/new-photo`}>
                            <button onClick={scrollToTop} className="gallery-button gallery-button-start">
                                <h2 className="gallery-button-text ">{t('new-photo')}</h2>
                            </button>
                        </Link>
                    </div>
                    <div className="col-4">
                        {
                            oshTour.filter((item) => item.id < 2).map((item) => (
                                    <img key={item.id} src={item.image} alt="" className='gallery-img gallery-img-center'/>
                            ))
                        }
                        <Link to={`/gallery/3D-tour`}>
                            <button  onClick={scrollToTop} className="gallery-button center-btn">
                                <h2 className="gallery-button-text">{t('3D-tour')}</h2>
                            </button>
                        </Link>
                    </div>
                    <div className="col-4">
                        {
                            archivalPhotos.filter((item) => item.id < 3).map((item) => (
                                    <img key={item.id} src={item.image} alt="" className='gallery-img gallery-img-end'/>
                            ))
                        }
                        <Link to={`/gallery/archive-photos`}>
                            <button  onClick={scrollToTop} className="gallery-button end-btn">
                                <h2 className="gallery-button-text">{t('archive-photos')}</h2>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}