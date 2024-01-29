function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://storage.googleapis.com/tm-model/u02fOYRBx/model.json',modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}

function  gotResults(error, results){
    if (error){
        console.error(error);
    } else{
        console.log(results);
        random_number_r=Math.floor(Math.random() * 255)+1;
        random_number_g=Math.floor(Math.random() * 255)+1;
        random_number_b=Math.floor(Math.random() * 255)+1;

        document.getElementById("detected").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML='accuracy'+(results[0].confidence*100).toFixed(2)+"%";
       
        img=document.getElementById('dog.jpg')
        img1=document.getElementById('download.jpeg')
       
if(results[0].label=="Barking"){
    img.src='dog.jpg';
    
}else if(results[0].label=="Meowing"){
    img1.src='download.jpeg'

}else{
       
    }
}
}

