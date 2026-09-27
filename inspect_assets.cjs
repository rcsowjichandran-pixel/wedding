const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets');
const files = fs.readdirSync(dir);

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Asset Inspector</title>
  <style>
    body { font-family: sans-serif; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; padding: 20px; }
    .card { border: 1px solid #ccc; padding: 8px; border-radius: 8px; text-align: center; }
    img { max-width: 100%; height: 150px; object-fit: contain; }
    p { font-size: 11px; word-break: break-all; }
  </style>
</head>
<body>
  ${files.map(f => `
    <div class="card">
      <img src="src/assets/${encodeURIComponent(f)}" alt="${f}" />
      <p><strong>${f}</strong></p>
    </div>
  `).join('')}
</body>
</html>
`;

fs.writeFileSync('assets_preview.html', html);
console.log('Generated assets_preview.html with ' + files.length + ' assets');
