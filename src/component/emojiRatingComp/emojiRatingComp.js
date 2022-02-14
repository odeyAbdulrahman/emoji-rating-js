/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./emojiRating.css";
function EmojiRatingComp({data, selected, getSelectedEmojiData, selectedStyle}) {
  //selectedStyle
  return (
    <>
      <div className="emoji-box">
        {data &&
          data.map((item) => (
            <div
             key={item.id}
              className="emoji-sub-box"
              style={ selected === item.id ? selectedStyle : null}
              onClick={() => { getSelectedEmojiData(item)} }
            >
              <img className="emoji-img" src={item.img} />
              <label>{item.name}</label>
            </div>
          ))}
      </div>
    </>
  );
}

export default EmojiRatingComp;
