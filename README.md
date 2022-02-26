# react emoji rating

This Library is used to evaluate or rating using emojis in react js

## Installation

In the project directory, you can run: npm i emoji-rating-js

## Usage

To used Add this lines

![rating by emojes](https://i.postimg.cc/jdzvcLGF/Animation.gif)

![rating by emojes](https://i.postimg.cc/JnD5knNK/Capture.png)

1. `import { EmojiRating, Emojes, Styles } from 'emoji-rating-js`

2. ` const [Emoji, setEmoji] = useState({});`

3. `const getEmoji = (item) => setEmoji(item);`
    
4. `<EmojiRating
        data={Emojes.G1}
        onChange={getEmoji}
        style={Styles.style2}
      />`

## Options

| Property     | Type      | Description  |
| :------------ |   :---:       | --------: |
| data        |  json object         | `List of emoji objects`   |
| onChange         | func         | `Called when any emoji item selected`   |
| style        | css object         | `add style to selected emoji item`   |