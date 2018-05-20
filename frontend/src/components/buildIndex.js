const fs = require('fs');
const path = require('path');

const dirContents = fs.readdirSync(__dirname);

const exportCodes = dirContents
  .filter(entry=>(entry!=='index.js'))
  .filter(entry=>(entry!=='buildIndex.js'))
  .map(entry=>{
    if(entry.indexOf('.js') != -1){
      const name = entry.split('.')[0];
      return 'export {default as ' + name + '} from "./' + entry + '"';
    }else{
      return 'export {default as ' + entry + '} from "./' + entry + '/' + entry + '.js"';
    }
  })

fs.writeFileSync(path.join(__dirname, 'index.js'), exportCodes.join('\n'));

