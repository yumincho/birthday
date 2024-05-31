import { addConfetti } from "@/api/api";
import JSConfetti from "js-confetti";
import { useEffect, useState } from "react";
import Odometer from "react-odometerjs";

const ConfettiButton = ({
  id,
  buttonLabel,
  confettis,
}: {
  id: string;
  buttonLabel: string;
  confettis: number;
}) => {
  const [confettiCount, setConfettiCount] = useState(0);

  useEffect(() => {
    setConfettiCount(confettis);
  }, [confettis]);

  const jsConfetti = new JSConfetti();
  const handleClick = () => {
    jsConfetti.addConfetti({
      emojis: ["🎉", "🎊", "🎈", "❤️", "💕"],
      emojiSize: 100,
      confettiNumber: 25,
    });
    addConfetti(id);
    setConfettiCount((curr) => curr + 1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <span>
        지금까지 총 <Odometer value={confettiCount} format="(,ddd)" /> 번 축하
        받았어요
      </span>
      <button onClick={handleClick}>{buttonLabel}</button>
    </div>
  );
};

export default ConfettiButton;
