function(){
var imgcount = 1;
var total = 6;

function slide(x){
	var image = document.getElementsById('img');
	imgcount = imgcount + x;
	
	image.src = "img" + imgcount + ".jpg";
}
}