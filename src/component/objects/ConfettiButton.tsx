import { addConfetti } from "@/api/api";
import JSConfetti from "js-confetti";
import { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import emojiRegex from "emoji-regex";

const parseEmojis = (emojiString: string): string[] => {
  const regex = emojiRegex();
  const emojis = [];
  let match;
  while ((match = regex.exec(emojiString)) !== null) {
    emojis.push(match[0]);
  }
  return emojis;
};

const ConfettiButton = ({
  id,
  buttonLabel,
  confettis,
  celebrationCount,
}: {
  id: string;
  buttonLabel: string;
  confettis: string;
  celebrationCount: number;
}) => {
  const [confettiCount, setConfettiCount] = useState(0);

  useEffect(() => {
    setConfettiCount(celebrationCount);
  }, [celebrationCount]);

  const jsConfetti = new JSConfetti();
  const handleClick = () => {
    jsConfetti.addConfetti({
      emojis: parseEmojis(confettis),
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
