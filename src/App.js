import React from 'react';
import SearchBar from './SearchBar';
//import { Configuration, OpenAIApi } from "openai";


const MainPage = () => {
  const handleSearch = async (searchTerm) => {
    // console.log(import.meta.env.OPEN_API_KEY)

    // const configuration = new Configuration({
    //   apiKey: import.meta.env.OPEN_API_KEY,
    // });
    // const openai = new OpenAIApi(configuration);
    
    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: "share usage, side effects,  direction to use, Composition , Consume Type, medical practice about `searchTerm` medicine, share details in tabular format in hindi and english language",
    //   temperature: 0,
    //   max_tokens: 100,
    //   top_p: 1.0,
    //   frequency_penalty: 0.2,
    //   presence_penalty: 0.0,
    //   stop: ["\n"],
    // });
    // console.log("response", response);
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
      <h1>Welcome to the Search App</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default MainPage;
