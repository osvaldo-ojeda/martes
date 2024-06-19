import Word from "../models/Word.js";

class WordService {
  wordModel = new Word();
  insertWordService = async (word) => {
    try {
      const wordValidate = /^[A-Za-z]+$/.test(word);
      if (!wordValidate) throw error;
      const data = await this.wordModel.create(word);
      return data;
    } catch (error) {
      throw error;
    }
  };
  getWordsService = async () => {
    try {
      const data = await this.wordModel.getAll();
      if (!data) throw error;
      return data;
    } catch (error) {
      throw error;
    }
  };
  getWordsApiService = async (cantidad) => {
    try {
      const data = await fetch(
        `https://texto.deno.dev/palabras?cantidad=${cantidad}`
      );
      const {palabras} = await data.json();
      const bulkData = await this.wordModel.bulkCreate(palabras);
      return bulkData;
    } catch (error) {
      throw error;
    }
  };
}

export default WordService;
