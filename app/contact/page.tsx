"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");

  const scrollToTop = () => {
    window.location.href = "/";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      console.log("제출 시작:", email);

      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const result = await response.json();
      console.log("응답:", result);

      if (response.ok) {
        setMessageType("success");
        setMessage(
          result.message || "이메일이 전송되었습니다! 메일함을 확인해주세요."
        );
        setEmail("");

        if (result.requestId) {
          console.log("받은 requestId:", result.requestId);
        }
      } else {
        setMessageType("error");
        setMessage(result.error || "오류가 발생했습니다");
      }
    } catch (error) {
      console.error("네트워크 에러:", error);
      setMessageType("error");
      setMessage("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 상단 네비게이션 바 */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md z-20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <button
            onClick={scrollToTop}
            aria-label="맨 위로 이동"
            className="p-0 focus:outline-none"
          >
            <Image
              src="/Bettercode.png"
              alt="BetterCode Logo"
              width={40}
              height={10}
              priority
            />
          </button>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <div className="min-h-screen flex items-center justify-center p-8 pt-24">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            문의하기
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8 text-center leading-relaxed">
            이메일 주소를 입력하시면 문의 작성 페이지 링크를 보내드립니다.
            <br />
            <span className="text-sm text-gray-500">(링크는 30분간 유효합니다)</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
                required
                disabled={loading}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                         disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed
                         transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg 
                       hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed 
                       transition-all shadow-lg"
            >
              {loading ? "전송 중..." : "제출하기"}
            </button>
          </form>

          {message && (
            <div
              className={`mt-6 p-4 rounded-lg border ${
                messageType === "success"
                  ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700"
                  : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </>
  );
}