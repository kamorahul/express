var http = require('http');
var route = require("./routes");
var response = require("./response")
var request = require("./request")
function myExpress(){

  var server =    http.createServer(function(req,res){
            response(res);
            request(req);
            var handler =  route.match(req)
            if(typeof handler === "function"){
              handler(req,res)
            }
            else{
              res.end("Route Not Found")
            }
   })
   var listen = function(port){
     server.listen(port,function(){
          console.log("server is listning at : "+port);
   })

}
return {listen : listen , get : route.get}
}


module.exports = myExpress;
