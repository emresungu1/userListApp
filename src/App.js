import { useState } from "react";
import "./App.css";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";

function App() {
  const [activeUserId, setActiveUserId] = useState(null);

  return (
    <div className="uygulama-container">
      <div className="kullanici-listesi-container">
        <UserList setActiveUserId={setActiveUserId} />
      </div>
      {activeUserId && (
        <div className="kullanici-detay-container">
          <UserDetail activeUserId={activeUserId} />
        </div>
      )}
    </div>
  );
}

export default App;