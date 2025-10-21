"use client";

import { Suspense } from "react";
import InquiryForm from "./InquiryForm";

// 로딩 컴포넌트
function InquiryLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">페이지 로딩 중...</p>
      </div>
    </div>
  );
}

export default function InquiryPage() {
  return (
    <Suspense fallback={<InquiryLoading />}>
      <InquiryForm />
    </Suspense>
  );
}