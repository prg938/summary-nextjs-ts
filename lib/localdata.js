
import fsPromises from 'fs/promises'
import path from 'path'

export async function getLocalData(filePath) {
  const filePathResolved = path.join(process.cwd(), filePath)
  const data = await fsPromises.readFile(filePathResolved)
  const dataParsed = JSON.parse(data)
  return dataParsed
}