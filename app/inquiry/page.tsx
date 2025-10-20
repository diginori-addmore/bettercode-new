"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function InquiryPage() {
  const searchParams = useSearchParams();
  // requestId 또는 id 파라미터 둘 다 지원
  const requestId = searchParams.get("requestId") || searchParams.get("id");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "warning">("success");
  const [submitted, setSubmitted] = useState(false);

  const scrollToTop = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    if (!requestId) {
      setMessageType("warning");
      setStatusMessage(
        "잘못된 접근입니다. 이메일에서 받은 링크를 통해 접속해주세요."
      );
    } else {
      console.log("받은 requestId:", requestId);
    }
  }, [requestId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      console.log("문의 제출 시도:", { requestId, ...formData });

      const response = await fetch("/api/submit-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestId: requestId,
          name: formData.name,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      console.log("응답:", result);

      if (response.ok) {
        setMessageType("success");
        setStatusMessage(result.message || "문의가 성공적으로 접수되었습니다!");
        setSubmitted(true);
        setFormData({ name: "", phone: "", subject: "", message: "" });
      } else {
        setMessageType("error");
        setStatusMessage(result.error || "오류가 발생했습니다");
      }
    } catch (error) {
      console.error("네트워크 에러:", error);
      setMessageType("error");
      setStatusMessage("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  // requestId가 없으면 에러 화면
  if (!requestId) {
    return (
      <>
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-20">
          <div className="max-w-7xl mx-auto px-6 py-3">
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

        <div className="min-h-screen flex items-center justify-center p-8 pt-24">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ⚠️ 오류
            </h1>
            <p className="text-red-600 dark:text-red-400 mb-6 leading-relaxed">
              {statusMessage}
            </p>
            <button
              onClick={scrollToTop}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg 
                       hover:bg-blue-700 transition-all shadow-lg"
            >
              메인으로 돌아가기
            </button>
          </div>
        </div>
      </>
    );
  }

  // 제출 완료 화면
  if (submitted) {
    return (
      <>
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-20">
          <div className="max-w-7xl mx-auto px-6 py-3">
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

        <div className="min-h-screen flex items-center justify-center p-8 pt-24">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ✅ 접수 완료
            </h1>
            <p className="text-green-600 dark:text-green-400 text-lg mb-4">
              {statusMessage}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              빠른 시일 내에 답변 드리겠습니다.
            </p>
            <button
              onClick={scrollToTop}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg 
                       hover:bg-blue-700 transition-all shadow-lg"
            >
              메인으로 돌아가기
            </button>
          </div>
        </div>
      </>
    );
  }

  // 문의 폼
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-20">
        <div className="max-w-7xl mx-auto px-6 py-3">
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

      <div className="min-h-screen flex items-center justify-center p-8 pt-24">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            문의 내용 작성
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center">
            ⏰ 이 링크는 30분간 유효합니다
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="홍길동"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                         disabled:bg-gray-100 dark:disabled:bg-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="010-1234-5678"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                         disabled:bg-gray-100 dark:disabled:bg-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                제목 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="문의 제목을 입력하세요"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                         disabled:bg-gray-100 dark:disabled:bg-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                문의 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
                rows={8}
                placeholder="문의 내용을 상세히 입력해주세요"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                         disabled:bg-gray-100 dark:disabled:bg-gray-700 resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg 
                       hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed 
                       transition-all shadow-lg"
            >
              {loading ? "제출 중..." : "문의하기"}
            </button>
          </form>

          {statusMessage && !submitted && (
            <div
              className={`mt-6 p-4 rounded-lg border ${
                messageType === "success"
                  ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-300"
                  : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border-red-300"
              }`}
            >
              {statusMessage}
            </div>
          )}
        </div>
      </div>
    </>
  );
}