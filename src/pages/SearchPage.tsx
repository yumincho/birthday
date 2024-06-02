import { SearchResult, findBirthdayer } from "@/api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const SearchPage = () => {
  const [result, setResult] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const birthday = new Date(formData.get("birthday") as string);

    setResult(await findBirthdayer(name, birthday));
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
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
      <div>
        {result.map(({ id }) => (
          <button key={id} onClick={() => navigate(`/${id}`)}>
            {id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
