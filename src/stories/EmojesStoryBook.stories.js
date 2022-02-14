import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { EmojiRatingComp } from "../../dist/index.es";
import getEmojes from "../core/data/emojesData";

const stories = storiesOf("emojes app", module);
stories.add("App", () => {
  const [selectedEmoji, setselectedEmoji] = useState({});
  const getSelectedEmojiData = (item) => setselectedEmoji(item);
  const style = { border: "solid #4d100a 1px", 'box-shadow': "rgb(0 0 0 / 8%) 0 3px 10px 0"};
  return (
    <>
      <br />
      <EmojiRatingComp
        data={getEmojes()}
        selected={selectedEmoji.id}
        getSelectedEmojiData={getSelectedEmojiData}
        selectedStyle={style}
      />
      <h4>your selaction is {selectedEmoji.name}</h4>
    </>
  );
});
