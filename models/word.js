
class WordModel {
  constructor() {
    this.words = [];
  }

  createWord = async (word) => {
    this.words.push(word);
    return this.words[this.words.length - 1];
  };

  getAll = async () => {
    return this.words.join(' '); // Devuelve un string con todas las palabras separadas por un espacio
  };

  countWords = async () => {
    const wordCount = this.words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    return wordCount;
  };

  deleteWord = async (word) => {
    const initialLength = this.words.length;
    this.words = this.words.filter(w => w !== word);
    const finalLength = this.words.length;
    return initialLength !== finalLength;
  };
}

export default new WordModel();