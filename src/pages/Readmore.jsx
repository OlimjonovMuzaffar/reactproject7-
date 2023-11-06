import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";


function Readmore() {
  const { id } = useParams();
  const url =
    "https://api.unsplash.com/search/photos?client_id=uWVrg72t8OVmTVU-YnhWlmZJf3nUgid5GNfGeYZCeWE&page=1&query=rain%22%27t" +
    id;
  const { data: image, error, isPending } = useFetch(url);
  console.log(image);
  return <div></div>;
}

export default Readmore;
