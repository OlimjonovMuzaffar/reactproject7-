import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, NavLink } from "react-router-dom";

function Home() {
  let url =
    " https://api.unsplash.com/search/photos?client_id=uWVrg72t8OVmTVU-YnhWlmZJf3nUgid5GNfGeYZCeWE&page=1&query=rain%22%27";

  const handleSubmit = () => {
    url = `https://api.unsplash.com/search/photos?client_id=uWVrg72t8OVmTVU-YnhWlmZJf3nUgid5GNfGeYZCeWE&page=1&query=${value}`;
  };
  const [data, setData] = useState(null);
  const [value, setValue] = useState();

  useEffect(() => {
    axios.get(url).then((response) => {
      const images = response.data.results;
      setData(images);
      console.log(images);
    });
  }, [url]);
  return (
    <div>
      <div className="search ">
        <h1 className="text-2xl font-sans font-semibold">Search any images</h1>
        <div className=" flex gap-x-5">
          <input
            type="text"
            placeholder="Search any images"
            className="input input-bordered input-accent w-full max-w-xs"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button onClick={handleSubmit} className="btn btn-outline btn-error ">
            Search
          </button>
        </div>
      </div>
      <div className="max-w-7xl items-center grid mx-auto p-16 grid-cols-3 gap-x-10 gap-y-10">
        {data &&
          data.map((image) => {
            return (
              <div key={image.id}>
                <NavLink to={`/image/${image.id}`}>
                  {" "}
                  <div
                    key={image.id}
                    className="card card-compact w-96 bg-base-100 shadow-xl"
                  >
                    <figure>
                      <img
                        className="w-[400px] h-[400px]"
                        src={image.urls.raw}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {" "}
                        Description: {image.description}
                      </h2>
                      <p>{image.alt_description}</p>
                      <div className="card-actions justify-end">
                        <NavLink to={"image.links.download"}>
                          {" "}
                          <button className="btn btn-secondary">
                            Download
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
