import { Link } from 'react-router-dom';
import './navigations.scss';

export const Navigations = ({ list, selected, setSelected }) => {
    return (
        <aside className="nav-container">
            {list.map((item) => (
            <button
                onClick={()=>{
                setSelected(item.id)
                
                }}
                key={item.id} 
                className="nav-element" 
                style={{
                backgroundColor: item.id == selected ? 'rgba(34, 125, 165, 1)' : 'rgba(230, 236, 245, 1)',
                color: item.id == selected ?  'white' : 'rgba(34, 125, 165, 1)',
                }}>
            
                <strong>
                    <p>{item.title}</p>
                </strong>

                {
                   item.link === true && (
                    <Link to={'/aiyl-aimaks'}>{item.title}</Link>
                   ) 
                }
            </button>
            ))}
        </aside>
    );
}

