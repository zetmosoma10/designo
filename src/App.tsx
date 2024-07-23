import Button from "./components/Button";
import Incentives from "./pages/home/sections/Incentives";

function App() {
  return (
    <div className="bg-violet-600 h-screen">
      <Button type="button">Button</Button>
      <Button className="bg-peach text-white hover:bg-light_peach">Link</Button>
    </div>
  );
}

export default App;
