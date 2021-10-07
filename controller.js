function myFunction() {
	var text = document.getElementById("entrada").value.toUpperCase(); 
	var key = false;
	if (text.length%2 == 0){
		// longitud par
		for(var i = 0; i<text.length/2; i++){
			if (text[i] != text[text.length - 1 - i]){
				key =true; 
				break; 
			}
		}
	}else{
		// longitud impar
		for(var i = 0; i<(text.length - 1 )/2; i++){
			if (text[i] != text[text.length - 1 - i]){
				key =true; 
				break; 
			}
		}
	}
	if (key == true){
		document.getElementById("result").innerHTML = "Resultado : No es palindromo.";
	}else{
		document.getElementById("result").innerHTML = "Resultado : Es palindromo.";
	}
}