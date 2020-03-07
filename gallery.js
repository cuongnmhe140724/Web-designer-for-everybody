function upDate(previewPic) {
	document.getElementById('image').innerHTML= previewPic.alt;
	document.getElementById('image').style.backgroundImage = 'url('+previewPic.src+')';
}
function unDo() {
	document.getElementById('image').style.backgroundImage = 'url()';
}
