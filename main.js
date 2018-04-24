window.addEventListener("load",start);


var parts;
var player_no=0;
var player_1;
var player_2;
var won=0;

function start(){
won=1;
document.querySelector(".first").classList.add("highlight");
        document.querySelector(".second").classList.remove("highlight");
parts = document.querySelectorAll(".col-4");
for(let i=0;i<parts.length;i++){
    parts[i].addEventListener("click",highlightIt);
}
 takename();

}

function takename(){
    player_1 = prompt("Enter the name of first player","Player1");
    player_2 = prompt("Enter the name of second player","Player2");
    document.querySelector(".first").textContent = player_1;
    document.querySelector(".second").textContent = player_2;
}


function highlightIt(){
    
    if(player_no == 0){
        event.srcElement.classList.add("circle");

        document.querySelector(".second").classList.add("highlight");
        document.querySelector(".first").classList.remove("highlight");
        player_no=1;
    }
    else{
        document.querySelector(".first").classList.add("highlight");
        document.querySelector(".second").classList.remove("highlight");
        event.srcElement.classList.add("cross");
        player_no=0;
    }
    setInterval(checkifwin,100);
}


function checkifwin(){
    for(let i=0;i<parts.length;i+=3){
        if(parts[i].classList.contains("cross") 
        && parts[i+1].classList.contains("cross") && parts[i+2].classList.contains("cross")){
            
            if(won==1){
            alert(player_2+" wins");
            again();}
            
        }
        if(parts[i].classList.contains("circle") 
        && parts[i+1].classList.contains("circle") && parts[i+2].classList.contains("circle")){
            
            if(won==1){
            alert(player_1+" wins");
            again();}
            
        }
    }


    for(let i=0;i<3;i++){

        if(parts[i].classList.contains("cross") 
        && parts[i+3].classList.contains("cross") && parts[i+6].classList.contains("cross")){
            
            if(won==1){
            alert(player_2+" wins");again();
            }
            
        }
        if(parts[i].classList.contains("circle") 
        && parts[i+3].classList.contains("circle") && parts[i+6].classList.contains("circle")){
            
            if(won==1){
            alert(player_1+" wins");again();
            }
           
        }
       
    }

    if(parts[0].classList.contains("cross") 
    && parts[4].classList.contains("cross") && parts[8].classList.contains("cross")){
        
        if(won==1){
        alert(player_2+" wins");
        again();}
        
    }
    if(parts[0].classList.contains("circle") 
    && parts[4].classList.contains("circle") && parts[8].classList.contains("circle")){
        
        if(won==1){
        alert(player_1+" wins");again();}
        
    }

    if(parts[2].classList.contains("cross") 
    && parts[4].classList.contains("cross") && parts[6].classList.contains("cross")){
        
        if(won==1){
        alert(player_2+" wins");again();}
        
    }
    if(parts[2].classList.contains("circle") 
    && parts[4].classList.contains("circle") && parts[6].classList.contains("circle")){
        
        if(won==1){
        alert(player_1+" wins");again();}
        
    }
     
    var checked = 0;

    for(let i=0;i<parts.length;i++){
        
        if(parts[i].classList.contains("cross") || parts[i].classList.contains("circle")){
           checked++;
        }
        if(i==parts.length-1 && checked == 9){
            
            if(won==1){
            alert("No result , Try again TIC-TAC-TOER'S");
            again();}
            
        }
    }


}
function again(){
    won=0;
   if(confirm("wanna play again?")){
    window.location.reload();
   }
   
}
