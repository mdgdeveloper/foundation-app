import "./bookBlock.css";
import { useState } from 'react';

// Images to be added in the Data Storage
import Preludio from "../../img/covers/preludio.jpg";
import Hacia from "../../img/covers/hacia.jpg";
import Planet from "../../img/guide-planet-0.png";

// Stars to be added in the Component
import Star from "../../img/stars/star.png";
import StarBg from "../../img/stars/star-bn.png";
import StarHalf from "../../img/stars/star-half.png";
import Book from "../book/Book";

const BookBlock = ({ block }) => {


  return (
    <div>
      <div className="bl-block-entry">
        <div className="bl-block-left">
          <div className="bl-block-img-detail"><img src={block.img} alt="" className="bl-block-img"/></div>
          <div className="bl-block-name">{block.name}</div>
          <div className="bl-block-desc">{block.desc}</div>
        </div>
        <div className="bl-block-right">
            {block.books.map( (item) => <Book book={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
};

export default BookBlock;
