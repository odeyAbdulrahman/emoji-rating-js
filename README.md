# emojes-react-js

Library for evaluation using emojes

## Installation

In the project directory, you can run: npm i emojes-react-js

## Usage
To used Add this lines

1. `import {EmojiRatingComp} from 'emojes-react-js`
2. `const [selectedEmoji, setselectedEmoji] = useState({});`
3. `const getSelectedEmojiData = (item) => setselectedEmoji(item);`
4. `const style = { border: "solid #4d100a 1px", 'box-shadow': "rgb(0 0 0 / 8%) 0 3px 10px 0"};`
5. `const emojes = [
      { id: 11, name: "Like", img:"https://www.kindpng.com/picc/m/8-82912_clip-art-emoji-faces-printable-free-heart-eyes.png", status: true },
      { id: 22, name: "very good",   img:"https://www.kindpng.com/picc/m/115-1152472_fingers-clipart-middle-finger-emoji-sad-face-emoji.png",  status: true },
      { id: 33, name: "good", img:"https://www.kindpng.com/picc/m/4-49781_transparent-background-sad-emoji-hd-png-download.png", status: true },
      { id: 44, name: "pissed me", img: "https://www.kindpng.com/picc/m/41-415971_angry-face-transparent-angry-emoji-hd-png-download.png", status: false },
    ];`
6. `<EmojiRatingComp
        data={emojes}
        selected={selectedEmoji.id}
        getSelectedEmojiData={getSelectedEmojiData}
        selectedStyle={style}/>`