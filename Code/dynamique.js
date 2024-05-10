document.addEventListener("DOMContentLoaded", function() {
    var circle = document.getElementById("circle");
    var formulaire = document.getElementById("menu");
    var rayonCercle = document.getElementById("rayon");
    var defaite = document.getElementById("defaite");
    var vitesseCercle = document.getElementById("vitesse");
    var GIF_countdown = document.getElementById("GIF_countdown");

    var temps = 0;
    var isMoving = false; 
    const maxX =window.innerWidth;
    const maxY =window.innerHeight;
    var x = window.innerWidth/2;
    var y = window.innerHeight/2;
    var rayon=50;
    var vitesse=20;
    var compteur=0;
    var depart=[x,y];


    function moveCircle() {
        if (isMoving) {
            var estDansLaBorne = false;
            
            var maxIterations = 100; 
            var iterations = 0; 

            while (!estDansLaBorne && iterations < maxIterations) {
                var ajoutX = parseFloat((Math.random() * 3).toFixed());
                var ajoutY = parseFloat((Math.sqrt(9 - ajoutX * ajoutX)).toFixed());
            
                if (Math.random() < 0.5) {
                    ajoutX = -ajoutX;
                }
                if (Math.random() < 0.5) {
                    ajoutY = -ajoutY;
                }

                if (x + ajoutX < maxX && y + ajoutY < maxY && x + ajoutX >= 0 && y + ajoutY >= 0) {
                    circle.style.left = x + ajoutX + "px";
                    circle.style.top = y + ajoutY + "px";
                    estDansLaBorne = true;
                }
                iterations++;   
            }
            x += ajoutX;
            y += ajoutY;
        }
    }


/*
    function listeBezier(length) {
        var res=[];
        for (let i=0; i<=length; i++) {
            res[i] = i/length;
        }
        return res;
    }


    function CourbeBezier(controlPoints, lstIntervalle) {
        //var coordPoints = Array(lstIntervalle.length).fill([0, 0]);
        //console.log("control points " + controlPoints);
        var coordPoints=[];
        for (let i=0; i<lstIntervalle.length; i++) {
            coordPoints.push([0,0])
        }
        
        inverseCoordX=false;
        inverseCoordY=false;

        if (Math.random() < 0.5) {
            var inverseCoordX = true;
        }
        if (Math.random() < 0.5) {
            var inverseCoordY = true;
        }

        for (let i=0; i<lstIntervalle.length; i++) {
            for (let j=0; j<=controlPoints.length-1; j++) {
                let term = Math.pow((1 - lstIntervalle[i]), (controlPoints.length - j -1 )) * Math.pow(lstIntervalle[i], j);
                let termX = term;
                let termY = term;

                coordPoints[i][0] += controlPoints[j][0] * term;
                coordPoints[i][1] += controlPoints[j][1] * term;
                
                if (inverseCoordX) {
                    coordPoints[i][0] += controlPoints[j][0] * (lstIntervalle[i]-term);
                    
                }
    
                if (inverseCoordY) {
                    coordPoints[i][1] += controlPoints[j][1] * (lstIntervalle[i]-term);
                }

                
            }
        }

        //console.log(lstIntervalle);
        //console.log(coordPoints);
        return coordPoints;
    }

    function pointsControl(depart, nombre) {
        var res = [depart];
        inverseCoordX=false;
        inverseCoordY=false;
        if (Math.random() < 0.5) {
            var inverseCoordX = true;
        }
        if (Math.random() < 0.5) {
            var inverseCoordY = true;
        }

        for (let i=1; i<=nombre; i++) {
            var estDansLaBorne = false;
            var maxIterations = 100; 
            var iterations = 0;  
            while (!estDansLaBorne && iterations < maxIterations) {
                var ajoutX = parseFloat((Math.random() * 10).toFixed()); // 40 pixels de diagonale entre chaques points de controle
                var ajoutY = parseFloat((Math.sqrt(1000 - ajoutX * ajoutX)).toFixed()); // Théorème de pythagore pour calculer la diagonale à 40 pixels

                /*if (Math.random() < 0.5) {
                    ajoutX = -ajoutX;
                }
                if (Math.random() < 0.5) {
                    ajoutY = -ajoutY;
                }

                if (inverseCoordX) {
                    ajoutX = -ajoutX;
                    
                }

                if (inverseCoordY) {
                    ajoutY = -ajoutY;
                }

                if (res[i-1][0]+ajoutX < maxX && res[i-1][1]+ajoutY < maxY && res[i-1][0]+ajoutX &&  res[i-1][1]+ajoutY >= 0) {
                    
                    res[i-1][0]+ajoutX;
                    estDansLaBorne = true;
                }
                iterations++;
            }
            //console.log(ajoutX+ " " +ajoutY);
            let coordY = res[i-1][1]+ajoutY;
            let coordX = res[i-1][0]+ajoutX;
            res.push([coordX, coordY]);
        }
        console.log(res);
    
        return res;
        
    }

    function bougerCercle(lengthBezier, lengthControl) { // fonction qui va bouger le cercle 25 fois à partir d'une liste de lengthControl nombre de points
        if (isMoving) {  
            var lstIntervalle = listeBezier(lengthBezier);
            var pointsControls = pointsControl(depart, lengthControl); // Il y aura lengthBezier intervalless dans chaque itérations d'une courbe de bézier
            var pointsBezier = CourbeBezier(pointsControls, lstIntervalle);
            //console.log(pointsBezier);
            var index = 0;
            pointsBezier.forEach(function(element) {
                setTimeout(function() {
                    circle.style.left = parseFloat(element[0].toFixed()) + "px";
                    circle.style.top = parseFloat(element[1].toFixed()) + "px" } , (1000/lengthBezier)*index); // Comme j'appelle la fonction bougerCercle toutes les 1 secondes, je repartis l'appelle
                    //console.log(circle.style.left);
                    //console.log(circle.style.top);
                    index+=1;   
            });
            depart = [pointsBezier[pointsBezier.length - 1][0] , pointsBezier[pointsBezier.length - 1][1]];
        }
    }

    function augmenterTemps() {
        temps+=1;
    }*/


    function toucheEspace(event) {
        if ((event.code === "Space" && compteur==0) || event.code === "Stop") {
            if (!isMoving) {
                GIF_countdown.style.display = "block";
                GIF_countdown.src = "Code/countdown.gif";
                setTimeout(function(){
                    temps=0;
                    GIF_countdown.src="";
                    GIF_countdown.style.display = "none";
                    isMoving = true;
                }, 5200);
            }
            else {
                isMoving = false;
            }

            compteur+=1;
        }
    }

    function stopGame() {
        if (isMoving) {
            var simulatedEvent = { code : "Stop" };
            toucheEspace(simulatedEvent);

            defaite.textContent = "Vous avez tenu " + temps + " secondes";

            setTimeout(function() {
              defaite.textContent = "";}, 3000);
        }

    }

    function restart(event) {

        event.preventDefault();
        circle.style.left = window.innerWidth/2 + "px";
        circle.style.top = window.innerHeight/2 + "px";
        x = window.innerWidth/2;
        y = window.innerHeight/2;
        compteur=0;
    }

    function updateRayon(event) {
        var size = this.value + "px";
        circle.style.width = size;
        circle.style.height = size; 
    }

    function updateVitesse(event) {
        vitesse = this.value;
    }

    
    document.addEventListener("keydown", toucheEspace);
    circle.addEventListener("mouseleave", stopGame);
    formulaire.addEventListener("submit", restart);
    rayonCercle.addEventListener("input", updateRayon);
    vitesseCercle.addEventListener("input", updateVitesse);

    setInterval(moveCircle, 5);
//    setInterval(function(){ bougerCercle(25, 5) }, 1000);
    setInterval(function(){temps+=1;}, 1000);
});



/*                                          A garder pour faire une balle rebondissante dans la section rulling
function listeBezier(length) {
    var res=[];
    for (let i=0; i<=length; i++) {
        res[i] = i/length;
    }
    return res;
}


function CourbeBezier(controlPoints, lstIntervalle) {
    //var coordPoints = Array(lstIntervalle.length).fill([0, 0]);
    //console.log("control points " + controlPoints);
    var coordPoints=[];
    for (let i=0; i<lstIntervalle.length; i++) {
        coordPoints.push([0,0])
    }

    for (let i=0; i<lstIntervalle.length; i++) {
        for (let j=0; j<=controlPoints.length-1; j++) {
            let term = Math.pow((1 - lstIntervalle[i]), (controlPoints.length - j -1 )) * Math.pow(lstIntervalle[i], j);
            coordPoints[i][0] += controlPoints[j][0] * term;
            coordPoints[i][1] += controlPoints[j][1] * term;
        }
    }

    //console.log(lstIntervalle);
    //console.log(coordPoints);  
    return coordPoints;
}

function pointsControl(depart, nombre) {
    var res = [depart];
    for (let i=1; i<=nombre; i++) {
        let ajoutX = parseFloat((Math.random() * 40).toFixed()); // 40 pixels de diagonale entre chaques points de controle
        let ajoutY = parseFloat((Math.sqrt(1600 - ajoutX * ajoutX)).toFixed()); // Théorème de pythagore pour calculer la diagonale à 40 pixels

        if (Math.random() < 0.5) {
            ajoutX = -ajoutX;
        }
        if (Math.random() < 0.5) {
            ajoutY = -ajoutY;
        }
        console.log(ajoutX+ " " +ajoutY);
        let coordY = res[i-1][1]+ajoutY;
        let coordX = res[i-1][0]+ajoutX;
        res.push([coordX, coordY]);
    }
    console.log(res);

    return res;
    
}

function bougerCercle(lengthBezier, lengthControl) { // fonction qui va bouger le cercle 25 fois à partir d'une liste de lengthControl nombre de points
    if (isMoving) {  
        var lstIntervalle = listeBezier(lengthBezier);
        var pointsControls = pointsControl(depart, lengthControl); // Il y aura lengthBezier intervalless dans chaque itérations d'une courbe de bézier
        var pointsBezier = CourbeBezier(pointsControls, lstIntervalle);
        //console.log(pointsBezier);
        var index = 0;
        pointsBezier.forEach(function(element) {
            setTimeout(function() {
                circle.style.left = parseFloat(element[0].toFixed()) + "px";
                circle.style.top = parseFloat(element[1].toFixed()) + "px" } , (1000/lengthBezier)*index); // Comme j'appelle la fonction bougerCercle toutes les 1 secondes, je repartis l'appelle
                //console.log(circle.style.left);
                //console.log(circle.style.top);
                index+=1;   
        });
        depart = [pointsBezier[pointsBezier.length - 1][0] , pointsBezier[pointsBezier.length - 1][1]];
    }
}

function augmenterTemps() {
    temps+=1;
}
*/