import WordService from "../service/WordService.js";

class WordController {
  wordService = new WordService();
  insertWord = async (req, res) => {
    try {
      const { word } = req.body;
      // if (!word) throw error;
      const data = await this.wordService.insertWordService(word);
      res.status(200).send(data);
    } catch (error) {
      res.status(422).send("no valida");
    }
  };
  getWords = async (req, res) => {
    try {
      const data = await this.wordService.getWordsService();
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send("no hay palabras");
    }
  };
  getWordsApi = async (req, res) => {
    try {
      const {cantidad}= req.params
      const data = await this.wordService.getWordsApiService(cantidad);
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send("no hay palabras");
    }
  };
}

export default WordController;
