
import { Router } from "express";
import wordController from "../controllers/wordController.js";

const router = Router();

router.post('/', wordController.insertWord);    
router.get('/', wordController.getWord);
router.get('/cantidad/:cantidad', wordController.getWordsApi);
router.get('/count', wordController.countWords);
router.delete('/:word', wordController.deleteWord); // Cambiar para recibir el parámetro `word` en la URL
router.get('/wordcount', wordController.getWordCount); // Nueva ruta para obtener el conteo de palabras

export default router;