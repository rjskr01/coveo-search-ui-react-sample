import { Result } from "@coveo/atomic-react";
import MyResultTemplateForYouTubeVideos from "./MyResultTemplateForYouTubeVideos";
import MyResultTemplateForSalesforceCases from "./MyResultTemplateForSalesforceCases";
import MyDefaultTemplate from "./MyDefaultTemplate";
import MyResultTemplateForSample from "./MyResultTemplateForSample";

const MyResultTemplateFunction = (result: Result) => {
    if (result.raw.filetype === 'YoutubeVideo') {
      return <MyResultTemplateForYouTubeVideos result={result} />;
    }
   
    if (result.raw.objecttype === 'Case') {
      return <MyResultTemplateForSalesforceCases result={result} />;
    }
   
    return <MyDefaultTemplate />;
  };

  export default MyResultTemplateFunction;