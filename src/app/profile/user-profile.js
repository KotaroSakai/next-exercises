"use client";
import { useState } from "react";

function UserProfile({ name = "ゲスト", age = "不明", email = "未設定" }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", maxWidth: "300px" }}>
      <h2>{name}</h2>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "詳細を隠す" : "詳細を表示"}
      </button>
      {showDetails && (
        <div>
          <p>年齢: {age}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}


export default UserProfile;
