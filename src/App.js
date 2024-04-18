import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetailsComponent from "./pages/userDetails";
import InterestsComponent from "./pages/interests";
import SuccessComponent from "./pages/success";
import SignUpComponent from "./pages/signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignUpComponent />} />
          <Route path="/details" element={<UserDetailsComponent />} />
          <Route path="/interests" element={<InterestsComponent />} />
          <Route path="/success" element={<SuccessComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
