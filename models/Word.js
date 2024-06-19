class Word {
  words = [];

  create = async (word) => {
    this.words.push(word);
    return this.words[this.words.length - 1];
  };

  getAll = async () => {
    return this.words.join(" ");
  };

  bulkCreate = async (array) => {
    this.words = [...this.words, ...array];
    return this.words;
  };

 
}

export default Word;
