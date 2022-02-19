import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { EmojiRating, Emojes, Styles } from "../../dist/index.es";

const stories = storiesOf("emojes app", module);
stories.add("App", () => {
  const [Emoji, setEmoji] = useState({});
  const getEmoji = (item) => setEmoji(item);
  return (
    <>
      <br />
      <EmojiRating
        data={Emojes}
        getEmoji={getEmoji}
        style={Styles.style2}
      />
      <h4>your rating is: {Emoji.name}</h4>
    </>
  );
});
