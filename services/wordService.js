
import wordModel from "../models/word.js"; // Verifica que tengas "word.js" en /models

class WordService {
  constructor() {
    this.words = [];
  }

  insertWord = async (word) => {
    try {
      const wordValidate = /^[a-zA-Z]+$/;
      console.log('Validando palabra:', word);
      if (!wordValidate.test(word)) throw new Error('Palabra no válida');
      const data = await wordModel.createWord(word); // Necesita existir createWord en /models/word.js
      console.log('Palabra insertada:', word);
      return data;
    } catch (error) {
      console.error('Error en insertWord:', error.message);
      throw new Error('Palabra no válida');
    }
  }

  getWord = async () => {
    try {
      const data = await wordModel.getAll();
      console.log('Palabras obtenidas:', data);
      return data;
    } catch (error) {
      throw new Error('Error al obtener la palabra');
    }
  }

  countWords = async () => {
    try {
      const data = await wordModel.countWords();
      console.log('Conteo de palabras:', data);
      return data;
    } catch (error) {
      throw new Error('Error al contar las palabras');
    }
  }

  deleteWord = async (word) => {
    try {
      const wordValidate = /^[a-zA-Z]+$/;
      if (!wordValidate.test(word)) throw new Error('Palabra no válida');
      const success = await wordModel.deleteWord(word);
      if (!success) throw new Error('Palabra no encontrada');
      console.log('Palabra eliminada:', word);
      return word;
    } catch (error) {
      console.error('Error en deleteWord:', error.message);
      throw new Error(error.message);
    }
  }

  getWordsApiService = async (cantidad) => {
    try {
      console.log(`Solicitando ${cantidad} palabras de la API externa`);
      const response = await fetch(`https://texto.deno.dev/palabras?cantidad=${cantidad}`);
      const dataJson = await response.json();
      console.log('Palabras obtenidas de la API:', dataJson);
      wordModel.words.push(...dataJson.palabras); // Agregar las palabras obtenidas a las existentes
      return dataJson.palabras;
    } catch (error) {
      console.error('Error en getWordsApiService:', error.message);
      throw new Error('Error al obtener la palabra');
    }
  }

  getWordCount = async () => {
    try {
      const data = await wordModel.countWords();
      console.log('Conteo de palabras:', data);
      return data;
    } catch (error) {
      throw new Error('Error al obtener el conteo de palabras');
    }
  }
}

export default new WordService();