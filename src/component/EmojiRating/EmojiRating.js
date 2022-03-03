/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import "./emojiRating.css";
function EmojiRating({
  data,
  onChange,
  style,
  size
}) {
  const [selected, setSelected] = useState(0);
  try{
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
                  width={size}
                  height={size}
                  style={selected === item.id ? style.img : null}
                />
                 <label style={selected === item.id ? style.text : null}>
                  <span style={{ "font-size": size + 15 + "%" }}>
                    {item.name}
                  </span>
                </label>
              </div>
            ))}
        </div>
      </>
    );
  } catch(error){
    console.info('error: ( ' + error + ' )')
    return(
      <>
      <h3 className="error-msg">😧 I did something wrong 😧</h3>
      </>
    );
  }
}
export default EmojiRating;
