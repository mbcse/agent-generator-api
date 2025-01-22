import express from 'express'
import { generateFullCharacterFile } from '../../controllers/generateFullCharacterFile.js'
const router = express.Router()

router.post('/', generateFullCharacterFile)

export default router
