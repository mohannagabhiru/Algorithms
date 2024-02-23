const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ["Front", "End", "JavaScript"];

const highlight = (str, keywords) => {
  let uniqueWords = new Set(keywords);
  let words = str.split(" ");
  let result = words.map((word) => {
    let output = "";
    if (uniqueWords.has(word)) output = `<s>${word}</s>;`;
    else {
      for (let i = 0; i < word.length; i++) {
        let prefix = word.slice(0, i + 1);
        let suffix = word.slice(i + 1);

        if (uniqueWords.has(prefix) && uniqueWords.has(suffix)) {
          output = `<s>${prefix}${suffix}</s>`;
          break;
        } else if (!uniqueWords.has(prefix) && uniqueWords.has(suffix)) {
          output = `${prefix}<s>${suffix}</s>`;
        } else if (uniqueWords.has(prefix) && !uniqueWords.has(suffix)) {
          output = `<s>${prefix}</s>${suffix}`;
        }
      }
    }
    return output !== "" ? output : word;
  });
  console.log(result);
  return result.join(" ");
};

console.log(highlight(str, words));