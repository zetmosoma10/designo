import DesignCard from "./components/DesignCard";
import DesignMultiGrid from "./components/DesignMultiGrid";
import NavBar from "./components/NavBar";
import Hero from "./pages/home/sections/Hero";

function App() {
  return (
    <div className="">
      <DesignMultiGrid>
        <DesignCard />
        <DesignCard />
        <DesignCard />
        <DesignCard />
        <DesignCard />
        <DesignCard />
        <DesignCard />
        <DesignCard />
        <DesignCard />
      </DesignMultiGrid>
    </div>
  );
}

export default App;
