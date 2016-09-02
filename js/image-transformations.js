
class ITImage {
	
	constructor(height = 0, width = 0, data = []) {
		this.height = height;
		this.width = width;
		this.data = data;
	}
	
}

class ITOperations {
	
	toGrayscale(imageSrc) {
		let imageDst = new ITImage(), src = imageSrc.data, j = 0;

		for (let i = 0; i < src.length; i += 4){
			imageDst.data[j ++] = src[i] * 0.2989 + src[i + 1] * 0.5870 + src[i + 2] * 0.1140;
		}
	  
	  imageDst.width = imageSrc.width;
	  imageDst.height = imageSrc.height;
	  
	  return imageDst;
	};
	
	grayITImageToCanvasImageData(grayITImage, imgData) {

		let j = 0, i = 0, dst = imgData.data;
		for (;i < dst.length; i+=4, j+=1) {
			dst[i] = grayITImage.data[j];
			dst[i+1] = grayITImage.data[j];
			dst[i+2] = grayITImage.data[j];
			dst[i+3] = 255;;
		}

	}
	
}

const IT = new ITOperations();