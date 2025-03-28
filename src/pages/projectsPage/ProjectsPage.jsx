import './projects.scss';
import { BaseComponents } from '../../features';
import { useEffect, useState } from 'react';
import axiosApi from '../../shared/api/AxiosApi';
import i18n from '../../i18n/i18n';
import { useSelector } from 'react-redux';

export const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const { setting } = useSelector((state) => state.setting);

    const fetchProjects = () => {
        axiosApi('/api/v1/news/projects/')
        .then(({data}) => setProjects(data))
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
                <h1 className="viewing_projects-text">{setting ? setting[0]?.project_title : ''}</h1>
                <div className="base-components__parent">
                {
                    projects.map((item) => (
                        <div className='projects-block' key={item.id} onClick={() => changeIndex(item.id)}>
                            <BaseComponents  item={item} index={index} changeIndex={changeIndex}/>
                        </div>
                    ))  
               }
                </div>

            </div>
        </div>
    );
}

