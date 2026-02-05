import { useEffect } from "react";
import { getBrands } from "./api/fipe";

function App() {
  useEffect(() => {
    getBrands().then(console.log);
  }, []);

  return <div className="text-black">FIPE test</div>;
}

export default App;
