import React from "react";
import "../Styles/Card.css";
import { Link, useLocation } from "react-router-dom";

function Card() {
  const location = useLocation();

  return (
    <div class="row">
      <div class="column">
        <div className="card">
          <Link
            to="/skills"
            style={{ textDecoration: "none", color: "black" }}
            className="card1"
          >
            <img
              className="img1"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAqFBMVEX///8Dg4cDbHA3xtAam6EBNjgAZWkpxM6m4ueUt7kAaGw4ydMBMjQknaQAfIBMmp30+vtk0NgbYmfb6ekCTVBChokJdnoAgIMCYWQnjpXt+vugyMl3sbPu9PXh7u8vusMor7dgpqghpasstL231NUAHB/I7fCx5urb8/VPy9SQ3OJ61t0SiY4YlZs9lZjP4+NurbBUrbMCV1oAGx4CREdblZgxgIR3p6rlRbpPAAAEDklEQVR4nO3dfVObMADHcQu0OKDo2o7W6QZq58PW6lY39/7f2dBqCeQBGBAS8vv+5dnVu3wuUBpy7OgIIYQQQgghhBBCCCGEEEIIIYQQQqj3bo477vau7yHW7NiV0L1WKt9dW0auRig3ckjS+h5p9e5lkbi3fQ+1ctKmifuj76FW7bM0E/tj32OtGkzoYEIHE7qWTHzftuM09/UnmKQibnLlvDVNYpvNYpKJHx9A3kqYKuaY+PHUoUtMNvEThshLMTVVjDFhTZJ910UUU0y4Io6zTQoohpgISOiZYoSJX/y8oc4pxplwT69Zxpm4+fGnZ9tt0eSKPHoMMCkcOZvIS7PCvAt59BhgEudErPe8iDdRhm+SmyahZxGRU4X488M3IT+HlzkSyyJeIi5SVDI5FXUnNuF/8ycOnU2BxCIOn6mCJuuHUNxS3Jb+3rLHIj6IrWLe5vDa1lbO5CRcjhq1DK+YKP6UP01yEyVWzeQybCbyUlj83rKPOMFSJJaXvXqtmMlj1JwknSrMgyc7Y0QMk+zgyUTVMLloYZqkJtesM63gdJKmrslJw5PJW5Z3Ri8mGm4SzWazmGvCPHa2JphYxYkiPMcSV22qnWNbNNkVPn2IS/utVp/FLZrMzgomul6zdWii7bV9lya6fgdkmwi//VQ2ya0VLLlrBcQ7FDYJ13N+zHew5wlvTSkkf6/emhLbZC54x2V1E2rtMfWw1F977NSkuEbNSsE16m5N9LyX0a2Jnve8OjbR8t5o5yZCFDXvoZeYnNM91DSx+YePonstSkyiJtds7+eUhLohus9VdE9OiUnVVTiRCW/vFuNfm2Oi2x4/OSapiq3PXlBZJi/3C31Xjz3D8kyqBBOYwAQmRplE1M4KmPy8KMZGMcmEjn00wYRr0rRBmXiLNGvatF/yBi6oJZNVMB4HC8tr1uSTvIELatFkvGBtM6mTBxNNTb5QwYRee2SSGGVS9doeJjCBCUxgwggmdDChgwkdTOg6N4nEGWniOIL1EmIzpFkmokYwgQlMYGKeyWG/PUwyFPGqmpEmtYMJTGACE5gwggkdTOg4+45qtlmMB2TSzvNPRsGQTFp5Ts5mNyyT5s9TGm0mryQDMil/7lYJSbTYkwzJ5Kjk+Wzzb2NRQfD+w25QJsLmT0KTDId+yMlwTcTz5EDCvr1jsknwm0kyVJOnoLwx82QyWJOvu0lpHJDhmqz4Iy4PJjCByX+a8P9rCMdR8x56hZqZaLjXokLNTOoEE5jABCYwgQlMWMGEDiZ0p7ylkfZN/vQ91so9MxdaO2hy3vdQK7eWdPB4Xt8jrdFfKSje6rHvgdbpfLIqX39s2OpZ9JRJBTtdf+g6rSYJQgghhBBCCCGEEEIIIYQQQgghhHTsH3HxASODVzEcAAAAAElFTkSuQmCC"
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <div className="tabname">
            <h2>Skills Details</h2>
            </div>
          </Link>
        </div>
      </div>
      <div class="column">
        <div className="card">
          <Link
            to={"/toolkit"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              className="img2"
              src="https://t3.ftcdn.net/jpg/01/21/94/22/360_F_121942254_EuQBHPUyA6RtzlIdYfLl5F1BHAKgCaGH.jpg"
              alt="Denim Jeans"
              style={{ width: "65%" }}
            />
            <div className="tabname">
            <h2>Coaching ToolKit</h2>
            </div>
          </Link>
        </div>
      </div>
      <div class="column">
        <div className="card">
          <Link
            to={"/details"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              className="img3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzCzbYB72SlUFjoPEciGN0Lvl1rcZ2vz_KQ&usqp=CAU"
              alt="Denim Jeans"
              style={{ width: "55%" }}
            />
            <div className="tabname">
            <h2>Coach Details</h2>
            </div>
          </Link>
        </div>
      </div>
      <div class="column">
        <div className="card">
          <Link to={"/form"} style={{ textDecoration: "none", color: "black" }}>
            <img
              className="img4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCcJml691HLYLGGr75hZUsnB7I2iRlVwq6Q&usqp=CAU"
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <div className="tabname">
            <h2>Coach Request Form</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
