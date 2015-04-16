var archives = require('../helpers/archive-helpers');

// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.

var htmlFetcher = function(){
  var list = archives.readListOfUrls();

  var listObj = {};
  for(var i = 0; i < list.length; i++){
    listObj[list[i]] = 0;
  }

  for(var key in listObj){
    if(archives.isURLArchived(key)){
      listObj[key] = 1;
    }
  }

  for(var key in listObj){
    if(listObj[key] === 0){
      archives.downloadUrls(key);
    }
  }
}

htmlFetcher();
