Webcam.set({
width:350,
Height:350,
image_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById('result').innerHTML="<img src='"+data_uri+"' id='clicked'/>"
    });
}
classifier=ml5.imageClassifier("",modelloded);
function modelloded(){
    console.log("model done")
}
function cheack(){
    img=document.getElementById("clicked");
    classifier.classify(img,gotResult);
}
