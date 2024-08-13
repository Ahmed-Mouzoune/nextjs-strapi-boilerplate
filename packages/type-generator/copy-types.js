// Thanks to Paul bratslavsky
// https://strapi.io/blog/improve-your-frontend-experience-with-strapi-types-and-type-script

const fs = require('fs')
const path = require('path')

const destinationFolder = 'frontend/src/types'

const files = [
  {
    src: path.join(__dirname, './backend/types/generated/contentTypes.d.ts'),
    dest: path.join(__dirname, `./${destinationFolder}/contentTypes.d.ts`),
  },
  {
    src: path.join(__dirname, './backend/types/generated/components.d.ts'),
    dest: path.join(__dirname, `./${destinationFolder}/components.d.ts`),
  },
]

function copyFile({ src, dest }) {
  const destinationDir = path.dirname(dest)

  // Check if source file exists
  if (!fs.existsSync(src)) {
    console.error(`Source file does not exist: ${src}`)
    process.exit(1)
  }

  // Ensure destination directory exists or create it
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true })
  }

  // Read the source file, modify its content and write to the destination file
  const content = fs.readFileSync(src, 'utf8')

  fs.writeFile(dest, content, (err) => {
    if (err) {
      console.error(`Error writing to destination file: ${err}`)
      process.exit(1)
    } else {
      console.log(`File ${src} copied and modified successfully!`)
    }
  })
}

files.forEach((file) => copyFile(file))
