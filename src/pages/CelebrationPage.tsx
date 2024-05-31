import ConfettiButton from "@/component/objects/ConfettiButton";
import Canvas3D from "@/component/Canvas3D";
import { useLoaderData } from "react-router-dom";
import { Birthdayer } from "@/api/api";

function getThisYearsBirthday(birthdayStr: string) {
  const birthday = new Date(birthdayStr);
  birthday.setFullYear(new Date().getFullYear());
  birthday.setHours(birthday.getHours() - 9);

  const date = new Intl.DateTimeFormat("ko-KR").format(birthday);
  const weekday = new Intl.DateTimeFormat("en-En", {
    weekday: "short",
  }).format(birthday);

  return `${date} ${weekday}`;
}

const CelebrationPage = () => {
  const { id, name, birthday, buttonLabel, confettis } =
    useLoaderData() as Birthdayer;

  const thisYearsBirthday = getThisYearsBirthday(birthday);
  const nthBirthday =
    new Date().getFullYear() - new Date(birthday).getFullYear();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "36px",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "600px",
      }}
    >
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
      <span
        style={{
          fontSize: "24px",
        }}
      ></span>
      <ConfettiButton id={id} buttonLabel={buttonLabel} confettis={confettis} />
    </div>
  );
};

export default CelebrationPage;
