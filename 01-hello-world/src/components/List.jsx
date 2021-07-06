import React from 'react'

const List = (props) => {

    console.log(props)

    return (
        <div>
            <ul>
               {
                   props.content.map(
                       (i, index) => <li key={index}>{i}</li>
                   )
               }
            </ul>
        </div>
    )
}

export default List
