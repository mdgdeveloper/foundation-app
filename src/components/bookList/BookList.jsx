import "./bookList.css";
import BookBlock from "../bookBlock/BookBlock";

// Importamos los datos 
import { bookGuide } from "../../data";


const BookList = () => {
  return (
    <div className="bl-main">
      <div className="bl-wrapper">
        {bookGuide.map( (element) => <BookBlock block={element} key={element.id}/>)}
      </div>
    </div>
  );
}; 

export default BookList;
