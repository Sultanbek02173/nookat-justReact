import { useEffect, useState } from "react";
import { Navigations } from "../../features";
import { TextInform } from "../../widgets";
import i18n from "../../i18n/i18n";
import { useDispatch, useSelector } from "react-redux";
import { fetchDistricts } from "../../app/store/reducers/districts";
import { useParams } from "react-router-dom";

export const AboutDistrict = () => {
    const [active, setActive] = useState(null);
    const [currentText, setCurrentText] = useState('');
    const [currentTitle, setCurrentTitle] = useState('');
    const [link, setLink] = useState('');
    const [bgImg, setBgImg] = useState('');
    const [person, setPerson] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const { district } = useSelector((state) => state.district);

    const fetchDistrict = () => {
        dispatch(fetchDistricts());
    };

    useEffect(() => {
        fetchDistrict();
    }, [dispatch]);

    useEffect(() => {
        const handleLanguageChange = () => {
            fetchDistrict();

            if (active !== null) {
                handleButtonClick(active);
            }
        };

        i18n.on('languageChanged', handleLanguageChange);
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [active]);


    useEffect(() => {
        if (district.length > 0) {
            if (id) {
                setActive(id);
            } else if (active === null) {
                const firstDistrict = district[0];
                setActive(firstDistrict.id); 
            }
        }
    }, [district, id]);

    const handleButtonClick = (id) => {
        const selectedDistrict = district.find((item) => item.id === +id);
        if (selectedDistrict) {
            setCurrentTitle(selectedDistrict.title); 
            setCurrentText(selectedDistrict.description);
            setPerson(selectedDistrict.person); 
            setLink(selectedDistrict.link); 
            setBgImg(selectedDistrict.img);
        }
    };

    useEffect(() => {
        if (active !== null) {
            handleButtonClick(active);
        }
    }, [active, district]);

    return (
        <div className="app-container container row">
            {district.length > 0 && (
                <>
                    <Navigations selected={active} setSelected={setActive} list={district} />
                    <div className="content">
                        <TextInform bgImg={bgImg} link={link} currentTitle={currentTitle} currentText={currentText} person={person} />
                    </div>
                </>
            )}
        </div>
    );
};
