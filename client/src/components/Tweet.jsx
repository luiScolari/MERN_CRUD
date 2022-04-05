import React from 'react'

const Tweet = ({ tweets, handleDetailsClick }) => {

    return <>
        {tweets.map((value) => (
            <div>
                <button href={`tweets/${value._id}`} onClick={handleDetailsClick}></button>
                {/* < onclick={handleDetailsClick} href={`tweets/${value._id}`}><span>{value.username}-</span></a> */}
                <div>{value.text}</div>
                <p></p>
            </div>
        ))}
    </>
}

export default Tweet;