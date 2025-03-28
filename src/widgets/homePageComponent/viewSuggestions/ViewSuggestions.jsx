import './viewSuggestions.scss'
import { CardComponent } from '../../../features'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMediaNews } from '../../../app/store/reducers/viewSlice'

export const ViewSuggestions = () => {
    
    const dispatch = useDispatch()
    const { card } = useSelector((state) => state.card)
    const { setting } = useSelector((state) => state.setting);
    useEffect(() => {
        dispatch(fetchMediaNews())
    }, [dispatch])    
    
    return (
        <div className='container'>
            <div className="viewing">
                <h1 className="viewing-text">{setting ? setting[0]?.title_cmi : ''}</h1>
                {
                    card.map((item) => (
                        <div key={item.id}>
                            <a href={item.link} target='_blank'>
                                <CardComponent image={item.image_media} date={item.date_media} title={item.title_media} description={item.description_media}/>
                            </a>
                        </div>
                    ))  
               }
            </div>
        </div>
    );
}


