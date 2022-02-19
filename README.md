# react emoji rating

This Library for rating using emojes in react js

## Installation

In the project directory, you can run: npm i emoji-rating-js

## Usage

To used Add this lines

![rating by emojes](https://i.postimg.cc/MZvPKhw9/emoji-react-js.png)

1. `import { EmojiRating, Emojes, Styles } from 'emoji-rating-js`

2. ` const [Emoji, setEmoji] = useState({});`

3. `const getEmoji = (item) => setEmoji(item);`
    
4. `<EmojiRating
        data={Emojes}
        onChange={getEmoji}
        style={Styles.style2}
      />`

## Options

| Property     | Type      | Description  |
| :------------ |   :---:       | --------: |
| data        |  json object         | `List of emoji objects`   |
| onChange         | func         | `Called when any emoji item selected`   |
| style        | css object         | `add style to selected emoji item`   |