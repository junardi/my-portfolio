import { Routes, Route } from "react-router-dom";
import Layout from "./routes/layout/layout.component";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />}></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
