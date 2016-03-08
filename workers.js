self.onmessage = function(event){
	var numero = event.data;
	var n = 1;
	var muestras = 10000;
	var indice = muestras;
  	primelist = "";
  	search: while (n<numero) {
	    n += 1;
	    for (var i = 2; i <= Math.sqrt(n); i += 1){
	      if (n % i == 0){
	      	if(n+1 == numero){
	      		if(indice>0&&indice<muestras){
	      			self.postMessage(primelist);
	      		}
			}
	        continue search;
	      }
	    }
	    // found a prime!
	    primelist += " " + n;
	    indice--;
	    if(indice == 0 || ((indice > 0) && (n+1) == numero)){
	    	self.postMessage(primelist);
	    	indice = muestras;
	    	primelist = "";
	    }
  	}
  	self.postMessage("FIN");
}