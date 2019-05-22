const tempFahr = prompt("What is the temperature in Fahrenheit?");
const eventType = prompt("Please choose an event type: casual, semi-formal, formal.").toLowerCase();

function wearThis(eventType, tempFahr) {
    if (eventType === "casual" && tempFahr < 54) {
        result = ("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear something comfy and a coat.")
    } else if (eventType === "semi-formal" && tempFahr < 54) {
        result = ("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a polo and a coat.")
    } else if (eventType === "formal" && tempFahr < 54) {
        result = ("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a suit and a coat.")
    } else if (eventType === "casual" && tempFahr > 54 || tempFahr < 70) {
        result = ("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear something comfy and a jacket.")
    } else if (eventType === "semi-formal" && tempFahr > 54 || tempFahr < 70) {
        result = ("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a polo and a jacket.")
    } else if (eventType === "formal" && tempFahr > 54 || tempFahr < 70) {
        result = ("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a suit and a jacket.")
    } else if (eventType === "casual" && tempFahr >= 70) {
        result = ("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear something comfy and no jacket.")
    } else if (eventType === "semi-formal" && tempFahr >= 70) {
        result = ("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a polo and no jacket.")
    } else if (eventType === "formal" && tempFahr >= 70) {
        result = ("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a suit and no jacket.")
    } else {
        result = ("Please choose from the given options.")
    }

    console.log(result);
}

wearThis(eventType, tempFahr);