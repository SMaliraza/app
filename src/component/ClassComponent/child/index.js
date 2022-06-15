import React from "react";

const Child = (props) => {
    console.log(props.value, "child props")
    let cssprop = {
        color: "black"
    }
    return (
        <div>
            <ol>
                {props.value.map((text) => {
                    return (
                        <li className="pink" style={cssprop}>
                            {text}
                        </li>
                    )
                }
                )}
            </ol>
        </div>
    )
}
export default Child