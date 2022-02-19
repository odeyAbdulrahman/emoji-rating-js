/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import "./emojiRating.css";

function EmojiRating({
  data,
  onChange,
  style
}) {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="emoji-box">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="emoji-sub-box"
              onClick={() => {
                onChange(item);
                setSelected(item.id);
              }}
            >
              <img
                className="emoji-img"
                src={item.img}
                style={selected === item.id ? style : null}
              />
              <label>{item.name}</label>
            </div>
          ))}
      </div>
    </>
  );
}

export default EmojiRating;
