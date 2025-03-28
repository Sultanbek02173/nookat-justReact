import { useEffect, useState } from 'react';
import { Navigations } from '../../features';
import './aiylAimaksPage.scss';
import { AiylAimaksInfo } from '../../widgets';
import axiosApi from '../../shared/api/AxiosApi';
import i18n from '../../i18n/i18n';

export const AiylAimaksPage = () => {
    const [districts, setDistricts] = useState([]);
    const [active, setActive] = useState(null);
    const [currentText, setCurrentText] = useState('');
    const [currentTitle, setCurrentTitle] = useState('Oбщая информация о районе');
    const [districtImgs, setDistrictImgs] = useState([]);
    
    const fetchDistrict = () => {
        axiosApi.get('/api/v1/passport/Infos/')
        .then(({ data }) => {
            setDistricts(data);
            if (data.length > 0) {
                setActive(data[0].id); 
                handleButtonClick(data[0].id);
            }
        });
    };

    useEffect(() => {
        fetchDistrict();
        i18n.on('languageChanged', fetchDistrict);
        return () => {
            i18n.off('languageChanged', fetchDistrict);
        };
    }, []);

    const handleButtonClick = (id) => {
        const select = districts.find((item) => item.id === id);
        
        if (select) {
            setCurrentTitle(select.description);
            setCurrentText(select.title);
            setDistrictImgs(select.images);
        }
    };

    useEffect(() => {
        if (active !== null) {
            handleButtonClick(active);
        }
    }, [active, districts]); 

    return (
        <div className='container row aiyl-container'>
            <Navigations selected={active} setSelected={setActive} list={districts} />
            <div className='content'>
                <AiylAimaksInfo title={currentTitle} text={currentText} images={districtImgs} />
            </div>
        </div>
    );
};
