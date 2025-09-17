import Image from "next/image";

const clients = [
    "/clients/client_1.png",
    "/clients/client_2.png",
    "/clients/client_3.png",
    "/clients/client_4.png",
    "/clients/client_5.png",
    "/clients/client_6.png",
    "/clients/client_7.png",
    "/clients/client_8.png"
];

export default function Clients() {
    return (
        <section className="clients">
      <h1>고객사</h1>
      <div className="clients-grid">
        {clients.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Clients QR ${idx + 1}`}
            width={100}
            height={100}
          />
        ))}
      </div>
    </section>
  );
}

