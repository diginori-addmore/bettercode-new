export default function CheckIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 ${className}`}
        >
            {/* 배경 원이 없는 순수한 체크마크 경로 */}
            <path
                fillRule="evenodd"
                d="M19.96 6.78a.75.75 0 00-1.06-1.06L9 15.69 5.06 11.75a.75.75 0 10-1.06 1.06l4.47 4.47a.75.75 0 001.06 0l10.43-10.44z"
                clipRule="evenodd"
            />
        </svg>
    );
}