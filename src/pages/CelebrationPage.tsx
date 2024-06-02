import ConfettiButton from "@/component/objects/ConfettiButton";
import Canvas3D from "@/component/Canvas3D";
import { useLoaderData } from "react-router-dom";
import { Birthdayer } from "@/api/api";

function getThisYearsBirthday(birthdayStr: string) {
  const birthday = new Date(birthdayStr);
  birthday.setFullYear(new Date().getFullYear());

  const date = new Intl.DateTimeFormat("ko-KR").format(birthday);
  const weekday = new Intl.DateTimeFormat("en-En", {
    weekday: "short",
  }).format(birthday);

  return `${date} ${weekday}`;
}

const CelebrationPage = () => {
  const { id, name, birthday, confettis, buttonLabel, celebrationCount } =
    useLoaderData() as Birthdayer;

  const thisYearsBirthday = getThisYearsBirthday(birthday);
  const nthBirthday =
    new Date().getFullYear() - new Date(birthday).getFullYear();

  return (
    <div className="pageLayout">
      <Canvas3D />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "MilkAndHoney",
        }}
      >
        <span style={{ fontSize: "36px" }}>{name}'s</span>
        <span style={{ fontSize: "36px" }}>{nthBirthday}th Birthday</span>
        <span style={{ marginTop: "4px", color: "#999999" }}>
          {thisYearsBirthday}
        </span>
      </div>
      <ConfettiButton
        id={id}
        buttonLabel={buttonLabel}
        confettis={confettis}
        celebrationCount={celebrationCount}
      />
    </div>
  );
};

export default CelebrationPage;
