document.getElementById("file").onchange = function() {
    const file = $('#file')[0].files[0];
    const reader = new FileReader();
    reader.onload = function(){
    	document.getElementById("filename").value = file.name;
    	document.getElementById("text").innerHTML = this.result;
    }
    reader.readAsText(file);
}