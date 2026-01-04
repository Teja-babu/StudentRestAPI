import axios from "axios";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const App=()=>{
  return(
    <>
    <div>
      <Header/>
    </div>
    <div>
      <Body/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}
export default App;