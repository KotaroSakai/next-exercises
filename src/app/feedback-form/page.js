"use client"

import { useState } from "react"
//import { POST } from "../feedback/route";

export default function Feedback () {
  const [formData, setFormData] = useState({
    username: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // バリデーション: 全てのフィールドが入力されているか確認
    if (!formData.username || !formData.message) {
      setError("全てのフィールドを入力してください。");
      return;
    }

    setError("");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",},
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(errorData.error || "送信に失敗しました");
      }

      setFormData({username: "", message: ""});
      setResponseMsg(data.message);

      //メッセージを消す処理
      setTimeout(() => {
        setResponseMsg("");
      }, 3000);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>フィードバックフォーム</h1>
      
      <form onSubmit={handleSubmit}>
        <label>名前</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={{ width: "100%", padding: "0.5rem" }}
        />

        <label>メッセージ</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ width: "100%", padding: "0.5rem" }}
        />
        
        {loading && <p>送信中...</p>}
        {error && <p>エラー: {error}</p>}
        <button type="submit">送信</button>
        <p>{responseMsg}</p>
      </form>

      
    </div>
  );
}