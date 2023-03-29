import React from "react";
import Services from "../components/services/Services";
import BookSlider from "../components/book-slider/BookSlider";
import { books } from "../data/books";
import HeadingTitle from "../components/heading-title/HeadingTitle";
import Slider from "../components/slider/Slider";

function Home() {
  return (
    <div className="home">
      <Slider />
      <Services />
      <HeadingTitle title="Most gifted" />
      <BookSlider data={books} />
      <HeadingTitle title="Best seller" />
      <BookSlider data={books} />
      <HeadingTitle title="Most with for" />
      <BookSlider data={books} />
    </div>
  );
}

export default Home;
