import axios from "axios";

const searchEngine = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID zA2ZVUeZSPFrhw1lLKrYumrPW9OF6KJCKOT4r2UPHJk",
    },
    params: {
      query: "cars",
    },
  });

  return response;
};

export default searchEngine;
