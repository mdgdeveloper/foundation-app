import BookList from '../bookList/BookList';
import './readingGuide.css';

const ReadingGuide = () => {
    return (
        <div className='r-wrapper'>
            <h2 className="r-title" id="guia">Guia de Lectura</h2>
            <h3 className="r-subtitle"></h3>
            <BookList />
        </div>
    )
}

export default ReadingGuide
