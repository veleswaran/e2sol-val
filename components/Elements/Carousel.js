import React, { useEffect, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  const [id, setId] = useState(0);

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <>
      <div className="cor-main">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            className={id === 0 ? "active" : ""}
            aria-current={id === 0 ? "true" : undefined}
            aria-label="Slide 1"
            onClick={() => setId(0)}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            className={id === 1 ? "active" : ""}
            aria-current={id === 1 ? "true" : undefined}
            aria-label="Slide 2"
            onClick={() => setId(1)}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            className={id === 2 ? "active" : ""}
            aria-label="Slide 3"
            onClick={() => setId(2)}
          ></button>
        </div>
        {id === 0 && (
          <div className="slide-container">
            <Image
              src="/images/slide01.jpg"
              className="d-block w-100"
              alt="Slide 1"
              width={1200}
              height={900}
            />
            <div className="carousel-caption d-none d-md-block animations">
              <h6>01. Providing for Today</h6>
              <h2 className="text-capitalize intro_featured_word">
                Vital Oil & Natural Gas
              </h2>
              <a
                href="#"
                className="btn btn-outline-light big-btn border-light bt-1"
              >
                Get a Quote
              </a>
              <span className="text-divider">or</span>
              <a href="#" className="btn">
                Request a Callback
              </a>
            </div>
          </div>
        )}
        {id === 1 && (
          <div className="slide-container">
            <Image
              src="/images/slide02.jpg"
              className="d-block w-100"
              alt="Slide 2"
              width={1200}
              height={900}
            />
            <div className="carousel-caption text-light d-none d-md-block animations">
              <h6>02. Innovations</h6>
              <h2 className="text-capitalize intro_featured_word">
                Know How Solutions
              </h2>
              <a
                href="#"
                className="btn btn-outline-light big-btn border-light bt-1"
              >
                Get a Quote
              </a>
              <span className="text-divider">or</span>
              <a href="#" className="btn">
                Request a Callback
              </a>
            </div>
          </div>
        )}
        {id === 2 && (
          <div className="slide-container">
            <Image
              src="/images/slide03.jpg"
              className="d-block w-100"
              alt="Slide 3"
              width={1200}
              height={900}
            />
            <div className="carousel-caption d-none d-md-block animations">
              <h6>03. Industry</h6>
              <h2 className="text-capitalize intro_featured_word">
                Energy & Commodities
              </h2>
              <div className="mt-4">
                <a href="#" className="btn btn-outline-light bt-1">
                  Get a Quote
                </a>
                <span className="mx-3">or</span>
                <a href="#" className="btn ">
                  Request a Callback
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Carousel;
