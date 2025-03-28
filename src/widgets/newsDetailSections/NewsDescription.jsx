import './newsDetailSections.scss';

export const NewsDescription = ({ news }) => {

  return (
    <div className="container detail_container">
      <div key={news.id} className='contents'>
        <div className="title_text">
          {news.image && <img src={news?.image} alt={news.title} />}
          <h1 className='title-h1'>{news.title}</h1>
        </div>
        <div className="row">
          <p dangerouslySetInnerHTML={{ __html: news.description }} className='news-text col-6'></p>
          <p dangerouslySetInnerHTML={{ __html: news.description }} className='news-text col-6'></p>
        </div>
        <p className="news-text" dangerouslySetInnerHTML={{ __html: news.first_paragraph }}></p>
        <p className="news-text" dangerouslySetInnerHTML={{ __html: news.second_paragraph }}></p>
        <p className="news-text" dangerouslySetInnerHTML={{ __html: news.general_paragraph }}></p>
      </div>
    </div>
  );
}