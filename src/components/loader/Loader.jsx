import React from "react";

export default function Loader() {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <div className="row d-flex justify-content-center gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="card"
              style={{ width: "18rem" }}
              aria-hidden="true"
            >
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="180"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect width="100%" height="100%" fill="#868e96" />
              </svg>

              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>

                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
