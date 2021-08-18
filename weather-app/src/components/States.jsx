// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'

// function States(props) {

//     const [states, setStates] = useState()

//     const url = "api.openweathermap.org/data/2.5/weather?"

//     useEffect (() => {
//         fetch(url)
//         .then((res) => res.json())
//         .then((res) => {
//             setStates(res)
//         })
//         .catch(console.error)
//     }, [])

//     return (
//         <section className="stateContainer">
//             {states.map(state => {
//                 return(
//                     <Link to={`q=${state.name}`}>
//                         <div className='stateName'>
//                             <h3>{state.name}</h3>
//                         </div>
//                     </Link>
//                 )
//             })}
//         </section>
//     );
// }

// export default States;