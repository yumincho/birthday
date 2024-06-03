import { findBirthdayer } from "@/api/api";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const SearchPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const birthday = new Date(formData.get("birthday") as string);

    const res = await findBirthdayer(name, birthday);

    if (res.length === 0) {
      alert("검색 결과가 없습니다.");
      return;
    } else {
      navigate(`/${res[0].id}`);
    }
  };

  return (
    <div className="pageLayout">
      <div
        style={{
          width: "100%",
          maxWidth: "24rem",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <FiChevronLeft size="2rem" />
          Back
        </a>
      </div>
      <div className="title">
        <span>🕵️</span>
        <span>Find someone</span>
        <span>to celebrate!</span>
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
        <button type="submit" className="styledButton">
          Search
        </button>
        <span className="tip">
          검색 결과가 존재하면 바로 링크로 이동합니다.
        </span>
      </form>
    </div>
  );
};

export default SearchPage;
