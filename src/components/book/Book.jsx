import "./book.css";

import Preludio from "../../img/covers/preludio.jpg";

import Star from "../../img/stars/star.png";
import StarBg from "../../img/stars/star-bn.png";
import StarHalf from "../../img/stars/star-half.png";

const Book = ({ book }) => {
  const calculateRating = (value) => {
    const stars = Math.trunc(value);
    const bnStars = Math.trunc(5 - value);
    const halfStars = value - stars;

    const result = [];

    for (let i = 0; i < stars; i++) {
      result.push(<img src={Star} alt="" className="bl-book-star" />);
    }

    for (let i = 0; i < halfStars; i++) {
      result.push(<img src={StarHalf} alt="" className="bl-book-star" />);
    }

    for (let i = 0; i < bnStars; i++) {
      result.push(<img src={StarBg} alt="" className="bl-book-star" />);
    }
    return <div className="bl-book-rating">{result}</div>;
  };

  return (
    <div className="bl-book">
      <img src={book.cover} alt="" className="bl-book-img" />
      <div className="bl-book-info">
        <h2 className="bl-book-title">{book.title}</h2>
        <div className="bl-book-tags">
          <div className="bl-book-tag .bl-book-tag-red">{book.group}</div>
          <div className="bl-book-tag .bl-book-tag-red">{book.saga}</div>
          <div className="bl-book-tag .bl-book-tag-red">{book.main}</div>
        </div>
        <div className="bl-book-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          exercitationem in soluta consectetur quod sint tempora sunt ipsam
          doloribus inventore ipsum nulla, omnis aut delectus eum. Officiis non
          perferendis architecto.
        </div>
        <div className="bl-book-footer">
          {calculateRating(book.rating)}
          <div className="bl-book-buttons">
            <button className="bl-button">Leer reseña</button>
            <button className="bl-button bl-comprar">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
