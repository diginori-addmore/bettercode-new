"use client";

export default function ContactButton() {
    // 문의하기 버튼 클릭 시의 동작을 처리할 수 있습니다. (예: 팝업 열기, 페이지 이동 등)
    const handleContactClick = () => {
        alert('문의하기 버튼이 클릭되었습니다!');
        // 실제로는 여기에 문의 폼을 열거나, 특정 문의 페이지로 이동하는 로직을 추가합니다.
    };

    return (
        <button
            onClick={handleContactClick}
            className="px-20 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-500 transition-all duration-300"
        >
            문의하기
        </button>
    );
}