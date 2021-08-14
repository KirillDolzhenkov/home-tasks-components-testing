import React, {useState} from "react";

type RatingPropsType = {

}

type StarPropsType = {
    selected: boolean
    setRatingValue: (value: number) => void
    value: 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingPropsType) => {
    const [ratingValue, setRatingValue] = useState(0)


    return (
        <div className='star'>
            <Star selected={ratingValue > 0} setRatingValue={setRatingValue} value={1}/>
            <Star selected={ratingValue > 1} setRatingValue={setRatingValue} value={2}/>
            <Star selected={ratingValue > 2} setRatingValue={setRatingValue} value={3}/>
            <Star selected={ratingValue > 3} setRatingValue={setRatingValue} value={4}/>
            <Star selected={ratingValue > 4} setRatingValue={setRatingValue} value={5}/>
        </div>
    )
}




const Star = (props: StarPropsType) => {
    return (
        <span onClick={()=>{props.setRatingValue(props.value)}}>
            {props.selected ? <b > star </b> : 'star'}
        </span>
    )
}