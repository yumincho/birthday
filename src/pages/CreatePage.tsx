import { createBirthdayer } from "@/api/api";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputEmoji from "react-input-emoji";

const CreatePage = () => {
  const [emojis, setEmojis] = useState<string>("");
  // const [startDate, setStartDate] = useState<Date>();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const birthday = new Date(formData.get("birthday") as string);

    const { id } = await createBirthdayer({
      name,
      birthday,
      confettis: emojis,
    });
    navigate(`/${id}`);
  };

  return (
    <div className="createPageLayout">
      <div className="title">
        <span>Happy Birthday</span>
        <span>From Everywhere</span>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Displayed Name
          <input type="text" name="name" placeholder="Name" required />
        </label>
        <label>
          Birthday
          <input type="date" name="birthday" required />
        </label>
        <label>
          Emojis for Confetti
          <InputEmoji
            value={emojis}
            onChange={setEmojis}
            maxLength={5}
            placeholder="5 emojis are the best!"
            theme="auto"
            keepOpened
            shouldReturn
            shouldConvertEmojiToImage={false}
          />
        </label>
        <button type="submit" className="createButton">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
