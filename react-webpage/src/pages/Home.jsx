import Leopard from "../components/profile.jsx";
import Whitefox from "../components/fox.jsx";
import Wolves from "../components/wolves.jsx";
import Cat from "../components/cat.jsx";
import Husky from "../components/husky.jsx";
import "./page.css";
function Home(){
    return <div class="Home">
    <Leopard title="Snowleopard" text="The ghost of the mounten"/>
    <Whitefox title="Arcticfox" text=" The Arctic fox........"/>
    <Wolves title="Timber wolf" text="The timber wolves........"/>
    <Cat title="Mainecoon" text="The mainecoon cat......"/>
    <Husky title="Husky" text="The husky is one of........."/>
    </div>;
}

export default Home;