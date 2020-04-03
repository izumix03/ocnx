export function main(): void {
  console.log('Hello, world');
}

const { createWorker } = require('tesseract.js');

export async function detectEnglish(imageUri: string) {
  await detect(imageUri, 'eng');
}

export async function detectJapanese(imageUri: string) {
  await detect(imageUri, 'jpn');
}

async function detect(imageUri: string, language: string) {
  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage(language);
  await worker.initialize(language);
  const { data: { text } } = await worker.recognize(imageUri);
  console.log(text);
  await worker.terminate();
}
