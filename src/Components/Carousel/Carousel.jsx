import React from "react";

const Carousel = ({ imageUrls, search, setSearch }) => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="2000"
      style={{ objectFit: "contain !important" }}
    >
      <div className="carousel-inner" style={{ maxHeight: "500px" }}>
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
        {imageUrls.map((url, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={url}
              className="w-100 blue-tint"
              style={{
                maxHeight: "500px",
                objectFit: "contain",
                maxWidth: "100%",
              }}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
