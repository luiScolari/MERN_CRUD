import React from 'react'

const NewTweet = () => {
    return (
        <div>
            <form method='POST' action="/new">
                <label htmlFor='username'>Insert your username: </label>
                <input name='username' id="username" type="text" />
                <p></p>
                <label htmlFor='text'>What you want to write: </label>
                <textarea name="text" id="text" cols="20" rows="5"></textarea>
                <button>Submit</button>
            </form>
        </div>


    );
}

export default NewTweet;