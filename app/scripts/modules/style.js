/**
 * This is just a demo class to show off some ES6.
 * Basically this is the same as an object with some
 * properties and methods. Don't model your classes 
 * after this style of coding... But do use this class
 * if you want to add colors, emojis and cool fonts into
 * your console.log statements!
 *
 * example:
 *
 *  console.log(`I ${style.emoji('heart')} programming!`);
 *
 *  or if you want the heart to be red:
 *
 *    var msg = `I %c${style.emoji('heart')} %cprogramming!`;
 *    console.log(msg, style.exclam, style.font);
 *
 *  the second 2 arguments style the text in msg starting at 
 *  %c, you can add as many %c as you want and as many styles.
 *  Well... 254 might be the max because I think arguments 
 *  are limited to 255. 
 */
class style {
  
  /**
   * style.exclam gets style for big red text!
   * @return {str} 
   */
  static get exclam() {
    return 'color:rgb(227, 101, 91);font-size:36px;font-weight:bold;';
  }


  static get regular() {
    return '';
  }

  /**
   * Default font style used for the style.font function.
   * @return {[type]} [description]
   */
  static get fontConfig () {
    return {
      color: 'rgb(89, 97, 87)', weight: 'regular', size: 16, family: 'Arial Black'
    };
  }


  /**
   * style.font will give styles for a font based on passed in config
   * object. Leave properties blank to get defaults on that setting.
   * 
   * @param  {Object} config {color: str, weight: str, size: int, family: str}
   * @return {[type]}        [description]
   */
  static font( config = style.fontConfig ) {
    return `color: ${config.color}; font-weight: ${config.weight}; font-size: ${config.size}px; font-family: ${config.family};`
  }


  /**
   * Get the url of an emoji
   * @param  {String} emoji 'heart' or ':heart' or ':heart:'
   * @return {[type]}       emoji image url
   */
  static emoji (emoji = 'heart') {
    // make sure emoji is wrapped with : 
    emoji = `:${emoji.replace(/^[:\W]?(\w+)[:\W]?$/gim, '$1')}:`;
    if (emojione && typeof emojione === "object") {
      const {emojioneList, unifyUnicode} = emojione;
      // First get the unicode from the emjoi str
      emoji = emojioneList.hasOwnProperty(emoji) ? unifyUnicode(emoji) : emoji;
    }
    return emoji;
  }


  /**
   * Put a background image in your console style!
   * @param  {str} image image url
   * @return {str}
   */
  static bgImage(image) {
    return `background-size: coverbackground-image: url(${image})`;
  }

}
