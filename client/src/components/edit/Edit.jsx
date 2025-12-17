import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useForm from "../../hooks/useForm";
import useRequest from "../../hooks/useRequest";

export default function EditWatch() {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const { request } = useRequest();
  const [error, setError] = useState("");

  const editGameHandler = async (values) => {
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
      await request(`/data/watches/${gameId}`, "PUT", {
        ...values,
        price: Number(price),
      });

      navigate(`/watches/${gameId}/details`);
    } catch (err) {
      setError("Failed to update watch. Please try again.");
    }
  };

  const { register, formAction, setValues } = useForm(editGameHandler, {
    title: "",
    genre: "",
    price: "",
    date: "",
    imageUrl: "",
    summary: "",
  });

  useEffect(() => {
    request(`/data/watches/${gameId}`)
      .then((result) => setValues(result))
      .catch(() => setError("Failed to load watch data."));
  }, [gameId, setValues, request]);

  return (
    <section id="edit-page">
      <form id="add-new-game" action={formAction}>
        <div className="container">
          <h1>Edit Watch</h1>

          {error && <p className="form-error">{error}</p>}

          <div className="form-group-half">
            <label>Watch Name</label>
            <input
              type="text"
              {...register("title")}
              placeholder="Enter watch name..."
              className={error ? "input-error" : ""}
            />
          </div>

          <div className="form-group-half">
            <label>Brand / Genre</label>
            <input
              type="text"
              {...register("genre")}
              placeholder="Enter brand..."
              className={error ? "input-error" : ""}
            />
          </div>

          <div className="form-group-half">
            <label>Active Players</label>
            <input
              type="number"
              min="0"
              {...register("price")}
              placeholder="0"
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
              {...register("imageUrl")}
              placeholder="https://..."
              className={error ? "input-error" : ""}
            />
          </div>

          <div className="form-group-full">
            <label>Summary</label>
            <textarea
              rows="5"
              {...register("summary")}
              placeholder="Write a brief summary..."
              className={error ? "input-error" : ""}
            ></textarea>
          </div>

          <input className="btn submit" type="submit" value="EDIT WATCH" />
        </div>
      </form>
    </section>
  );
}
