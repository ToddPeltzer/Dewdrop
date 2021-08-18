// import States from './States'
import Cities from './Cities'
import Results from './Results'



function Main(props) {

    

    return (
        <div>
            {/* <States /> */}
            <Cities />
            <Results />
        </div>
    );
}

export default Main;


//cities passed down as a prop to the result page so that the api link can be accessed by state and then city