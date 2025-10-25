import Image from "next/image";

export default function BotaoChat() {
  return (
    <div className="fixed bottom-5 right-5 cursor-point">
      <Image src="/chat.svg" alt="chat" width={50} height={50} />
    </div>
  )
}