import Accountstatus from "./components/Accountstatus";
import Auth from "./components/Auth";
import Balance from "./components/Balance";
import Banking from "./components/Banking";


function App() {
  return (
    <div className="App">
        <Auth/>
        <Balance/>
        <Banking />
        <Accountstatus />

    </div>
  );
}

export default App;
