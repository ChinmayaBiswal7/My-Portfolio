const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory && !dirPath.includes('node_modules') ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const files = [];
walkDir(path.join(__dirname, 'src'), function (filePath) {
    if (filePath.endsWith('.jsx')) {
        files.push(filePath);
    }
});

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');

    // Safe replacements
    content = content.replace(/'#ffffff'/g, "'var(--card-bg)'");
    content = content.replace(/background: '#ffffff'/g, "background: 'var(--card-bg)'");
    content = content.replace(/background: 'white'/g, "background: 'var(--card-bg)'");
    content = content.replace(/color="white"/g, 'color="var(--card-bg)"');
    content = content.replace(/background: '#f8f9fa'/g, "background: 'var(--card-alt)'");
    content = content.replace(/background: '#f8f9fc'/g, "background: 'var(--card-alt)'");
    content = content.replace(/border: '1px solid #dadce0'/g, "border: '1px solid var(--border-color)'");
    content = content.replace(/borderColor = '#dadce0'/g, "borderColor = 'var(--border-color)'");
    content = content.replace(/border: '#dadce0'/g, "border: 'var(--border-color)'");

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Replaced colors in', files.length, 'files');
