$( document ).ready( function () {

	var c=document.getElementById("sampleCanvas");
    var ctx=c.getContext("2d");
    let img = document.getElementById("sample");
    ctx.drawImage(img,0,0);

	img = ctx.getImageData(0, 0, 465, 620);;

	let gray = IT.threshold(IT.toGrayscale(img), 150);
	
	
	
	var imgData=ctx.createImageData(465,620);
	IT.grayITImageToCanvasImageData(gray, imgData);
	
	c=document.getElementById("sampleCanvas2");
    ctx=c.getContext("2d");
	ctx.putImageData(imgData,0,0);
	
});