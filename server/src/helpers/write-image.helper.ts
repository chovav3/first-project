import { writeFileSync } from 'fs'

export const writeImage = ({ image, imagePath }: { image: string, imagePath: string }) =>
  writeFileSync(`${process.cwd()}${imagePath}`, image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)[2], 'base64')