

import wordService from "../services/wordService.js";

class WordController {
  constructor() {
    this.wordService = wordService;
  }

  insertWord = async (req, res) => {
    try {
      const { word } = req.body;
      console.log('Palabra recibida:', word);
      if (!word || typeof word !== 'string') throw new Error('Palabra no válida');
      const data = await this.wordService.insertWord(word);
      res.status(200).send(data);
    } catch (error) {
      console.error('Error en insertWord:', error.message);
      res.status(422).send('no valida');
    }
  };

  getWord = async (req, res) => {
    try {
      const data = await this.wordService.getWord();
      res.status(200).send(data);
    } catch (error) {
      console.error('Error en getWord:', error.message);
      res.status(422).send('no valida');
    }
  };

  countWords = async (req, res) => {
    try {
      const data = await this.wordService.countWords();
      res.status(200).send(data);
    } catch (error) {
      console.error('Error en countWords:', error.message);
      res.status(422).send('no valida');
    }
  };

  deleteWord = async (req, res) => {
    try {
      const { word } = req.params; // Obtener el parámetro `word` de la URL
      const data = await this.wordService.deleteWord(word);
      res.status(200).send(data);
    } catch (error) {
      console.error('Error en deleteWord:', error.message);
      if (error.message === 'Palabra no encontrada') {
        res.status(404).send('no encontrada');
      } else {
        res.status(422).send('no valida');
      }
    }
  };

  getWordsApi = async (req, res) => {
    try {
      const { cantidad } = req.params;
      console.log(`Solicitando ${cantidad} palabras de la API externa`);
      const data = await this.wordService.getWordsApiService(cantidad);
      res.status(200).send(data);
    } catch (error) {
      console.error('Error en getWordsApi:', error.message);
      res.status(422).send('no valida');
    }
  };

  getWordCount = async (req, res) => {
    try {
      const data = await this.wordService.getWordCount();
      res.status(200).send(data);
    } catch (error) {
      console.error('Error en getWordCount:', error.message);
      res.status(422).send({ errorMsg: 'Error al obtener el conteo de palabras' });
    }
  };
}

export default new WordController();