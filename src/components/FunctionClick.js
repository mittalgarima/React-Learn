import React, { Fragment } from 'react'

function FunctionClick() {

    function changeEvent(e) {
        e.preventDefault();
        console.log("Hello Event handling...")
    }
    return (
        //<div>
        <Fragment>
            <button onClick={changeEvent}>click me</button>
            <a href=" https://www.youtube.com/ " onClick={changeEvent}>Click Me</a>
            <h1>hii garima</h1>
        </Fragment>
        //</div>
    )
}
export default FunctionClick
