 function route(){
  var routing_table = {}
  var match = function(req){
    return routing_table[req.url];
  }
  var get = function(path,handler){
      routing_table[path] = handler;

  }
  return {get : get,match : match};

}

module.exports = route ();
