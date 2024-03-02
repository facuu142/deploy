import { useState } from "react"
//import CardItem from "../cards/CardItem"
import { FaStar } from "react-icons/fa";

const RateForm = ({starsNumber=5})=>{

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleRate = (getCurrentIndex)=>{
        setRating(getCurrentIndex)
    }

    const handleMouseHover = (getCurrentIndex) =>{
        setHover(getCurrentIndex)
    }

    const handleMouseLeave = (getCurrentIndex) =>{
        setHover(rating)
    }

    return(
        <section>
        {[...Array(starsNumber)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              className={index <= (hover || rating) ? "active" : "inactive"}
              key={index}
              onClick={() => handleRate(index)}
              onMouseEnter={() => handleMouseHover(index)}
              onMouseLeave={handleMouseLeave}
              size={40}
            />
          );
        })}
      </section>
    )
}

export default RateForm