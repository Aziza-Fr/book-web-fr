import React, { useState } from "react";
import { authors } from "../data/author";
import "./Author.css";

function Authors() {
  const [search, setSearch] = useState("");

  return (
    <section className="authors">
      <div className="authors-search-wrapper">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search in Authors..."
        />
      </div>
      <div className="authors-wrapper">
        {authors
          .filter((a) => a.FullName.toLocaleLowerCase().includes(search))
          .map((author) => (
            <div className="author" key={author.id}>
              <img
                src={author.Image}
                alt={author.FullName}
                className="author-img"
              />
              <h2 className="author-name">{author.FullName}</h2>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Authors;
