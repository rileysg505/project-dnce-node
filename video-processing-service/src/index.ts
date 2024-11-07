import express from 'express'
import ffmpeg from 'fluent-ffmpeg'

const app = express()
const port = 3001

app.post('/process-video', (req, res) => {
  const inputPath = req.body.inputPath
  const outputPath = req.body.outputPath

  if (!inputPath || !outputPath) {
    res.status(400).send('Invalid input: Missing file path')
    return
  }

  // ffmpeg(inputPath)
  // .outputOptions('-vf',"scale=-1:360")
  // .on()
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
