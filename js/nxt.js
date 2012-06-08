  var nxt = {};
  functions = ['set_output_state'];
  for (var i = 0, l = functions.length; i<l; i++) {
    (function(i){
      nxt[functions[i]] = function() {
        args = Array.prototype.slice.call(arguments);
        args.unshift(functions[i]);
        socket.emit.apply(socket,args);
      }
    })(i);
  }
