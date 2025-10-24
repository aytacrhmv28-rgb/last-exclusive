import Categories from "../components/Categories.jsx";
import Delivery from "../components/Delivery.jsx";
import Todays from "../components/Todays.jsx"


function Home() {
    return(
        <div>
            <Categories/>
            <Todays/>
            <Delivery/>
        </div>
    );
}
export default Home;