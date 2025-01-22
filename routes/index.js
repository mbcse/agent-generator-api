import express from 'express'
// import verifyAPIKey from '../middleware/verifyAPIKey.js'
import characterFileroute from './characterfile/index.js'

const router = express.Router()

// landing page
router.get('/', (req, res) => {
  res.send('Welcome to Backend!')
})

router.get('/hello', (req, res) => {
  res.send('Welcome to Backend!')
})

router.use('/characterfile', characterFileroute)

export default router
