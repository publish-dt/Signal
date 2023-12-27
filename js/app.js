window.PlayAudio = (elementName) => {
    //debugger;
    document.getElementById(elementName).play();
}

window.VolumeChange = (volume) => {
    //debugger;
    var pre = document.getElementById("pre");
    if (pre !== null) pre.volume = volume;
    var roar = document.getElementById("roar");
    if (roar !== null) roar.volume = volume;
}

window.WakeLockMethod = () => {
    if (navigator.wakeLock)
        wakeLock = navigator.wakeLock.request('screen');
}