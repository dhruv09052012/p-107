function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iGFQ3n4VC/model.json', modelReady);
}

function modelReady()
{
    classifier.classifier(gotResults);
}