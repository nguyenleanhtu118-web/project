import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function App() {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);

        return (
            <div>
                <Rating
                    onClick={handleRating}
                    initialValue={rating}
                    size={35}
                    transition
                    fillColor="gold"
                    emptyColor="gray"

                />

            </div>
        )
    }
}
