import { CardComponent } from '../../features';
import './antiCorruptionPage.scss';
import { useEffect, useState } from 'react';
import i18n from '../../i18n/i18n';
import axiosApi from '../../shared/api/AxiosApi';
import { useTranslation } from 'react-i18next';

export const AntiCorruptionPage = () => {
    const [catalogs, setCatalogs] = useState([]);
    const {t} = useTranslation();
    const fetchProjects = () => {
        axiosApi('/api/v1/managers/catalog/')
        .then(({data}) => setCatalogs(data))
    }

    useEffect(() => {
        fetchProjects()   
        i18n.on('languageChanged', fetchProjects);
        return () => {
            i18n.off('languageChanged', fetchProjects);
        };
    }, [])


    const [index, setIndex] = useState(null);

    const changeIndex = (id) => {
        if(id === index){
            setIndex(null)
        }else{
            setIndex(id)
        } 

    }
    return (
        <div className='container'>
            <div className="viewing_projects">
                <h1 className="viewing_projects-text">{t('АНТИКОРРУПЦИОННЫЕ МЕРОПРИЯТИЯ')}</h1>
                {
                    catalogs.map((item) => (
                        <div className='projects-block' key={item.id} onClick={() => changeIndex(item.id)}>
                            <CardComponent image={item.image} title={item.title} description={item.description}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}