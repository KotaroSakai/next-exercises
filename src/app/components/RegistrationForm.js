"use client";

import { useState } from "react";
export default function RegistrationForm () {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //バリテーション
    if (!formData.username || !formData.email || !formData.password) {
      setError("全ての項目を入力してください。");
      return;
    }

    if (formData.password.length < 7) {
      setError("パスワードは8文字以上入力してください。");
      return;
    }

    const emailreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailreg.test(formData.email)) {
      setError("正しいメールアドレスを入力してください。");
      return;
    }

    setError("");

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    }, 3000);

  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>ユーザー登録フォーム</h2>
      {submitted && <p>登録が完了しました！</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>ユーザー名</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>メールアドレス</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>パスワード</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "送信中..." : "登録"}</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );

};