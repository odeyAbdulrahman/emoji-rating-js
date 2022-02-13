import React, { useState } from "react";
import ImojiRatingComp from "./component/emojiRatingComp/emojiRatingComp";
import getEmojes from "./core/data/emojesData";

function App() {
  const [selectedEmoji, setselectedEmoji] = useState({});
  const selectedEmojiData = (item) => {
    setselectedEmoji(item);
  };
  return (
    <div className="App">
      <ImojiRatingComp data={getEmojes} selected={selectedEmoji.id} selectedEmojiData={selectedEmojiData} />
      <h2>selected  : {selectedEmoji.name}</h2>
    </div>
  );
}

export default App;
