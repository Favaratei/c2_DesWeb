 
const arrayColors: string[]= [
    "AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
    "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue",
    "Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen",
    "DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen",
    "DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue",
    "DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite",
    "Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory",
    "Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow",
    "LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray",
    "LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine",
    "MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed",
    "MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed",
    "Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
    "Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna",
    "Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato",
    "Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"
];

const arrayRandom: string[] = new Array(10);
for(var i: number=0; i<arrayRandom.length; i++){
    do{
        var aux: string = arrayColors[Math.floor(Math.random() * arrayColors.length)];
    }while(arrayRandom.includes(aux));
    arrayRandom[i] = aux;
    console.log(i+1, arrayRandom[i]); 
}
arrayRandom.sort();

alert("welcome!");

var colorRight: string = arrayRandom[Math.floor(Math.random() * arrayRandom.length)];
console.log("\n>> Cor certa: " + colorRight + "\n\n"); 
var right: boolean = false;
var guess: string = "";

do {
 guess = window.prompt("escolhi uma dessas cores:\n  > " + arrayRandom.join('\n  > ') + "\n advinhe qual");
    if (guess.toLowerCase() == colorRight.toLowerCase()){
     right = true;
        alert("congrats, você acertou a cor!");
        document.body.style.backgroundColor = guess;
        console.log(">>", guess + " [CORRETO]\n");
    }
    else if (guess == ""){
        alert("type!");
    }
    else {
        alert(
            "não foi essa kkkk\n\nDica: A sua cor está alfabeticamente"
            +  (guess.toLowerCase() > colorRight.toLowerCase() ? " DEPOIS " : " ANTES ")
            + "da que pensei. \nTente novamente!");
            console.log(">>", guess + " [INCORRETO]\n"); 
    }
} while (right == false);

