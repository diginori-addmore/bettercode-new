import Image from "next/image";

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Image
        src="/images/favicon.png"
        alt="favicon"
        width={128}
        height={128}
      />
    </main>
  );
}