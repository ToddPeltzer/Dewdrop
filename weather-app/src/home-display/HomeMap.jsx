// import React, { useState, useEffect } from 'react';

// function HomeMap(props) {

//     const key = process.env.REACT_APP_WEATHER_KEY

//     const [city, setCity] = useState([])
    
//         useEffect (() => {
//             const url  = `https://tile.openweathermap.org/map/temp_new/1/2/2.png?appid=${key}`
//             fetch(url)
//             .then((res) => {
//                return res.json()
//             })
//             .then((res) => {
//                 setCity(res)
//             })
//             .catch(console.error)
//         }, [])

//     return (
//         <div>
            
//         </div>
//     );
// }

// export default HomeMap;