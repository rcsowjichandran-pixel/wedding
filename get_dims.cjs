const fs = require('fs');
const path = require('path');

function getPngDimensions(filePath) {
  try {
    const fd = fs.openSync(filePath, 'r');
    const buffer = Buffer.alloc(24);
    fs.readSync(fd, buffer, 0, 24, 0);
    fs.closeSync(fd);
    if (buffer.toString('ascii', 1, 4) === 'PNG') {
      const width = buffer.readUInt32BE(16);
      const height = buffer.readUInt32BE(20);
      return { width, height };
    }
  } catch (e) {
    return null;
  }
  return null;
}

const dir = path.join(__dirname, 'src', 'assets');
const files = fs.readdirSync(dir);
const details = [];

for (const file of files) {
  const fullPath = path.join(dir, file);
  const dim = getPngDimensions(fullPath);
  details.push({
    file,
    width: dim ? dim.width : 'unknown',
    height: dim ? dim.height : 'unknown',
    size: fs.statSync(fullPath).size
  });
}

console.log(JSON.stringify(details, null, 2));
