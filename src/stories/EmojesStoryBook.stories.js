import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { EmojiRating, Emojes, Styles } from "../../dist/index.es";
import { ErrorBoundary } from "react-error-boundary";

const stories = storiesOf("emojes app", module);
stories.add("App", () => {
  const [Emoji, setEmoji] = useState({});
  const getEmoji = (item) => setEmoji(item);
  const style = {'text-align': 'center;'}
  return (
    <div style={style}>
      <ErrorBoundary>
        <h3> Group 1: </h3>
        <EmojiRating data={Emojes.G1} onChange={getEmoji} style={Styles.style2} />
        <h3> Group 2: </h3>
        <EmojiRating data={Emojes.G2} onChange={getEmoji} style={Styles.style2} />
        <h3>Group 3:</h3>
        <EmojiRating data={Emojes.G3} onChange={getEmoji} style={Styles.styleBord} />

        <h4>your rating is: {Emoji.name}</h4>
      </ErrorBoundary>
    </div>
  );
});
