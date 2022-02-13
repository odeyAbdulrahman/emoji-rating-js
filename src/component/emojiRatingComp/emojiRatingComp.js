/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./emojiRating.css";
function emojiRatingComp({data, selected, selectedEmojiData}) {
  //selectedStyle
  return (
    <>
      <div className="emoji-box">
        {data() &&
          data().map((item) => (
            <div
             key={item.id}
              className="imo-div"
              style={{ border: selected === item.id ? "solid #4d100a 1px" : ""}}
              onClick={() => { selectedEmojiData(item)} }
            >
              <img className="emoji-img" src={item.img} />
              <label>{item.name}</label>
            </div>
          ))}
      </div>
    </>
  );
}

export default emojiRatingComp;
