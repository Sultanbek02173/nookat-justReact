// import Str from '../../../shared/images/adminPage/str.png';
import '../slide.scss';


export function Structure({ structure }) {
  return (
    <div className='container'>
      {structure.map((item) => (
        <div key={item.id} className="str-con">
          <div className="title-text">
            <h1>{item.title}</h1>
          </div>
          <div className="image-con">
            <img src={item.image} className='str-image' />
          </div>
        </div>
      ))}
    </div>
  )
}
