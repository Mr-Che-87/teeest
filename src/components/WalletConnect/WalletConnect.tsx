import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchBalance } from "../../api/apiService";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import "./WalletConnect.module.scss";

export default function WalletConnect() {
  const wallet = useTonWallet();
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (wallet) {
      const walletAddress = wallet.account.address;
      setAddress(walletAddress);
      loadBalance(walletAddress);
    }
  }, [wallet]);

  const loadBalance = async (walletAddress: any) => {
    const balance = await fetchBalance(walletAddress);
    setBalance(balance);
  };

  const handleNavigate = () => {
    navigate("/transaction");
  };

  return (
    <div className="container">
      <header>
        <TonConnectButton />
        <p>Баланс: {balance} TON</p>
      </header>
      <main>
        <p>Адрес: {address || "Кошелёк не подключён"}</p>
        <button onClick={handleNavigate}>Перейти к транзакциям</button>
      </main>
    </div>
  );
}
