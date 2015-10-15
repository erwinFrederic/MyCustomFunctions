/**
 * Created by SATELLITE on 15/10/2015.
 */
/*
 This script is created to manage div height
 which are on the same section
 */

//Fixing the reference block
function Equalize(trivialReference, trivialTarget){

    var theReference = document.querySelector(trivialReference);
    var theTarget = document.querySelector(trivialTarget);

    if(theReference) {
        var heightReference = theReference.clientHeight;
        theTarget.innerHeight = heightReference;

        var singleHeight = "height: " + heightReference + "px;";
        theTarget.setAttribute("style", singleHeight);
        theReference.setAttribute("style", singleHeight);
    } else {
        alert("Trouble detected");
    }
}

var equalization = Equalize(".front .region-user-06", ".front .region-user-07");
var equalization2 = Equalize(".front .region-user-00", ".front .region-client");

console.debug(equalization);