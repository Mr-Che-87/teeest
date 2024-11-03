import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TonConnectProviderWrapper from "./components/TonConnectProviderWrapper";
import WalletConnectPage from "./components/WalletConnect/WalletConnect";
import "./styles/globals.css";

function App() {
  return (
    <TonConnectProviderWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<WalletConnectPage />} />
          <Route path="/wallet-connect" element={<WalletConnectPage />} />
        </Routes>
      </Router>
    </TonConnectProviderWrapper>
  );
}

export default App;
