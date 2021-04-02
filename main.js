Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality:90
});
Webcam.attach("#camera");

function clickPicture(){
    Webcam.snap(function (takeImg) {
        document.getElementById("result").innerHTML=`<img id="captured_image" src=${takeImg}>`
    })
}
console.log("ml5 version:", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tH1hnDNg-/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model has been loaded");
}

function speak(){
    var speech=window.SpeechSynthesis;
    speakData1="The first prediction is "+prediction1;
    speakData2="The second prediction is "+prediction2;
    var sayThis=new SpeechSynthesisUtterance(speakData1+speakData2);
}

function identify(){
    img=document.getElementById("captured_image");
    classifier.classify(img, getresult);
}

function getresult(error, results){
    if (error) {
        console.log(error)
    } else {
        console.log(results);
        prediction1=results[0].label;
        prediction2=results[1].label;
        speak();
        document.getElementById("gesture1").innerHTML=prediction1;
        document.getElementById("gesture2").innerHTML=prediction2;
        if(prediction1=="Wave"){
            document.getElementById("gestureEmoji1").innerHTML="&#x1F590;";
        }
        if(prediction1=="Ok"){
            document.getElementById("gestureEmoji1").innerHTML="&#x1F44C;"   
        }
           if(prediction1=="Smile"){
               document.getElementById("gestureEmoji1").innerHTML="&#128512;"
           }  
           if(prediction1=="Thumbs up"){
               document.getElementById("gestureEmoji1").innerHTML="&#x1F44D;"
              }
               if(prediction1=="Call"){
                document.getElementById("gestureEmoji1").innerHTML="&#x1F919;"}
                if(prediction2=="Wave"){
                    document.getElementById("gestureEmoji2").innerHTML="&#x1F590;";
                }
                if(prediction2=="Ok"){
                    document.getElementById("gestureEmoji2").innerHTML="&#x1F44C;"   
                }
                   if(prediction2=="Smile"){
                       document.getElementById("gestureEmoji2").innerHTML="&#128512;"
                   }  
                   if(prediction2=="Thumbs up"){
                       document.getElementById("gestureEmoji2").innerHTML="&#x1F44D;"
                      }
                       if(prediction2=="Call"){
                        document.getElementById("gestureEmoji2").innerHTML="&#x1F919;"}
}

}
