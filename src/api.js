import axios from "axios";

const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID zA2ZVUeZSPFrhw1lLKrYumrPW9OF6KJCKOT4r2UPHJk",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImage;
