import './supervisor.scss';
import { useEffect, useState } from 'react';
import axiosApi from '../../../shared/api/AxiosApi';
import i18n from '../../../i18n/i18n';

export const Supervisor = () => {
    const [visor, setVisor] = useState({});

    const fetchBanner = () => {
        axiosApi.get('/api/v1/base/banner/')
        .then(({ data }) => {            
            if (Array.isArray(data) && data.length > 0) {
                setVisor(data.length > 1 ? data[1] : data[0]);
            } else if (typeof data === 'object' && data !== null) {
                setVisor(data);
            } 
        })
    }
    useEffect(() => {
        fetchBanner();

        i18n.on('languageChanged', fetchBanner);
        return () => {
          i18n.off('languageChanged', fetchBanner);
        };
        
    }, [i18n]);

    return (
        <section className='container surervisorCont'>
            <div className='row'>
                <div className='col-6'>
                <div className='imgCont'>
                        <img src={visor.image } alt={visor.full_name} />
                        <div className='supervName'>
                            <p>{visor.full_name}</p>
                        </div>
                    </div>
                </div>

                <div className='col-6'>
                    <div className='textCont'>
                        <h2 className='textCont__title'>{visor.title}</h2>
                        <p className='textCont__text' dangerouslySetInnerHTML={{__html: visor.description}}></p>
                       
                        <p className='textCont__textBold'> {visor.full_name}</p>
                    </div>
                </div>
            </div>
         
        </section>
    );
}
