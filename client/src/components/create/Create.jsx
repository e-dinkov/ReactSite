import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import useRequest from "../../hooks/useRequest";
import { useState } from "react";

export default function WatchCreate() {
  const navigate = useNavigate();
  const { request } = useRequest();
  const [error, setError] = useState("");

  const createGameHandler = async (values) => {
    setError("");

    const { title, genre, price, date, imageUrl, summary } = values;

    if (!title || title.length < 3) {
      return setError("Title must be at least 3 characters long.");
    }

    if (!genre) {
      return setError("Genre is required.");
    }

    if (price === "" || Number(price) < 0) {
      return setError("Active players must be a positive number.");
    }

    if (!date) {
      return setError("Release date is required.");
    }

    if (!imageUrl || !/^https?:\/\/.+/.test(imageUrl)) {
      return setError("Please enter a valid image URL.");
    }

    if (!summary || summary.length < 10) {
      return setError("Summary must be at least 10 characters long.");
    }

    try {
      await request("/data/watches", "POST", {
        ...values,
        price: Number(price),
      });

      navigate("/catalog");
    } catch (err) {
      setError("Failed to create watch. Please try again.");
    }
  };

  const { register, formAction } = useForm(createGameHandler, {
    title: "",
    genre: "",
    price: "",
    date: "",
    imageUrl: "",
    summary: "",
  });

  return (
    <section id="add-page">
      <form id="add-new-game" action={formAction}>
        <div className="container">
          <h1>Add New Watch</h1>

          {error && <p className="form-error">{error}</p>}

          <div className="form-group-half">
            <label>Watch Name</label>
            <input
              type="text"
              placeholder="Enter watch name..."
              {...register("title")}
              className={error ? "input-error" : ""}
            />
          </div>

          <div className="form-group-half">
            <label>Brand / Genre</label>
            <input
              type="text"
              placeholder="Enter brand..."
              {...register("genre")}
              className={error ? "input-error" : ""}
            />
          </div>

          <div className="form-group-half">
            <label>Active Players</label>
            <input
              type="number"
              min="0"
              placeholder="0"
              {...register("price")}
              className={error ? "input-error" : ""}
            />
          </div>

          <div className="form-group-half">
            <label>Release Date</label>
            <input
              type="date"
              {...register("date")}
              className={error ? "input-error" : ""}
            />
          </div>

          <div className="form-group-full">
            <label>Image URL</label>
            <input
              type="text"
              placeholder="https://..."
              {...register("imageUrl")}
              className={error ? "input-error" : ""}
            />
          </div>

          <div className="form-group-full">
            <label>Summary</label>
            <textarea
              rows="5"
              placeholder="Write a short description..."
              {...register("summary")}
              className={error ? "input-error" : ""}
            ></textarea>
          </div>

          <input className="btn submit" type="submit" value="ADD WATCH" />
        </div>
      </form>
    </section>
  );
}
