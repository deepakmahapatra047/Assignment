import LandingPage from "./LandingPage";
import ProfileDashboard from "./ProfileDashboard";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [selectedAccount, setSelectedAccount] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={< LandingPage setSelectedAccount={setSelectedAccount} />} />
        <Route exact path="/profile/:accountId" element={< ProfileDashboard selectedAccount={selectedAccount} />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
