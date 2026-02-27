import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

function walk(dir, callback) {
  const files = readdirSync(dir);
  for (const file of files) {
    const filePath = join(dir, file);
    if (statSync(filePath).isDirectory()) {
      walk(filePath, callback);
    } else {
      callback(filePath);
    }
  }
}

walk('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    const originalContent = readFileSync(filePath, 'utf8');
    const newContent = originalContent
      .replace(/\b(bg|text|border|ring|shadow|from|to|via)-blue-\b/g, '$1-orange-')
      .replace(/blue-50/g, 'orange-50')
      .replace(/blue-100/g, 'orange-100')
      .replace(/blue-200/g, 'orange-200')
      .replace(/blue-300/g, 'orange-300')
      .replace(/blue-400/g, 'orange-400')
      .replace(/blue-500/g, 'orange-500')
      .replace(/blue-600/g, 'orange-600')
      .replace(/blue-700/g, 'orange-700')
      .replace(/blue-800/g, 'orange-800')
      .replace(/blue-900/g, 'orange-900')
      .replace(/blue-950/g, 'orange-950');
      
    if (originalContent !== newContent) {
      writeFileSync(filePath, newContent);
      console.log(`Updated ${filePath}`);
    }
  }
});
