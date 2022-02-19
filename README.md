# emoji-rating-js

This Library for rating using emojes

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
        getEmoji={getEmoji}
        style={Styles.style2}
      />`