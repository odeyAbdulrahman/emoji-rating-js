import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import {
  EmojiRating,
  SymbEmojiRating,
  Emojes,
  SymbolEmojes,
  Styles,
} from "../../dist/index.es";

const stories = storiesOf("emojes app", module);
stories.add("App", () => {
  const [Emoji, setEmoji] = useState({});
  const getEmoji = (item) => setEmoji(item);

  const [catEmoji, setCatEmoji] = useState({});
  const getCatEmoji = (item) => setCatEmoji(item);
  return (
    <>
      <div>
        <h3>Start: <strong style={Styles.style.text}>{Emoji.name}</strong></h3>
        <EmojiRating data={Emojes.Star} onChange={getEmoji} style={Styles.style}  size={65} />
      </div>
      <div>
        <h3>Cat: <strong style={Styles.blueStyle.text}>{catEmoji.name}</strong></h3>
        <SymbEmojiRating data={SymbolEmojes.Cat} onChange={getCatEmoji} style={Styles.blueStyle} size={45} />
      </div>
    </>
  );
});
