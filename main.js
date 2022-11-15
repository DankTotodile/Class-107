function record()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/o3SB96an-/model.json',modelLoaded)
}
function modelLoaded()
{
    classifier.classify(gotResults);
}