
class ITImage {
	
	constructor(height = 0, width = 0, data = []) {
		this.height = height;
		this.width = width;
		this.data = data;
	}
	
}

class ITOperations {
	
	/*
		Canvas image to gray scale represented as ITIImage. Example:
		
		let ctx=c.getContext("2d");
		ctx.drawImage( document.getElementById("sample") ,0,0);
		img = ctx.getImageData(0, 0, 465, 620);;
		IT.toGrayscale(img);
	*/
	toGrayscale(imageSrc) {
		let imageDst = new ITImage(), src = imageSrc.data, j = 0;

		for (let i = 0; i < src.length; i += 4){
			imageDst.data[j ++] = (src[i] * 0.2989 + src[i + 1] * 0.5870 + src[i + 2] * 0.1140) & 0xff; //omits decimal signs
		}
	  
	  imageDst.width = imageSrc.width;
	  imageDst.height = imageSrc.height;
	  
	  return imageDst;
	};
	
	/*
		Transform ITImage to canvas image. Example:
		
		let gray = IT.toGrayscale(img);
		let imgData = ctx.createImageData(465,620);
		IT.grayITImageToCanvasImageData(gray, imgData);
		ctx.putImageData(imgData,0,0);
	*/
	grayITImageToCanvasImageData(grayITImage, imgData) {

		let j = 0, i = 0, dst = imgData.data;
		for (;i < dst.length; i+=4, j+=1) {
			dst[i] = grayITImage.data[j];
			dst[i+1] = grayITImage.data[j];
			dst[i+2] = grayITImage.data[j];
			dst[i+3] = 255;;
		}

	};
	
	/*
		Transforms gray scaled image src to thresholded version (with fixed threshold rate). Example:
		
		let gray = IT.threshold(IT.toGrayscale(img), 150);
	*/
	threshold(imageSrc, threshold){
		let imageDst = new ITImage(), src = imageSrc.data, thresholdMap = [];

		for (let i = 0; i < 256; ++ i){
			thresholdMap[i] = i <= threshold? 0: 255;
		}

		for (let i = 0; i < src.length; ++ i){
			imageDst.data[i] = thresholdMap[ src[i] ];
		}

		imageDst.width = imageSrc.width;
		imageDst.height = imageSrc.height;

		return imageDst;
	};
	
}

const IT = new ITOperations();