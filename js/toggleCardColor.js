export default function ToggleBgCard ({
    treeCard,
    treeCardOn,
    treeCardOff,
    rainCard,
    rainCardOn,
    rainCardOff,
    coffeeCard,
    coffeeCardOn,
    coffeeCardOff,
    fireCard,
    fireCardOn,
    fireCardOff
}) {

    function toggleFillColorTree(){
   
        let toggleFillColor = treeCardOn.classList.contains('hide')
        
        if(toggleFillColor){
           treeCardOn.classList.remove('hide')
           treeCardOff.classList.add('hide')
           treeCard.classList.add('treeCardOn')
        } else {
           treeCardOn.classList.add('hide')
           treeCardOff.classList.remove('hide')
           treeCard.classList.remove('treeCardOn')
        }
     
     }
     
     function toggleFillColorRain(){
        
        let toggleFillColor = rainCardOn.classList.contains('hide')
        
        if(toggleFillColor){
           rainCardOn.classList.remove('hide')
           rainCardOff.classList.add('hide')
           rainCard.classList.add('rainCardOn')
        } else {
           rainCardOn.classList.add('hide')
           rainCardOff.classList.remove('hide')
           rainCard.classList.remove('rainCardOn')
        }
     
     }
     
     function toggleFillColorcoffee(){
        
        let toggleFillColor = coffeeCardOn.classList.contains('hide')
        
        if(toggleFillColor){
           coffeeCardOn.classList.remove('hide')
           coffeeCardOff.classList.add('hide')
           coffeeCard.classList.add('coffeeCardOn')
        } else {
           coffeeCardOn.classList.add('hide')
           coffeeCardOff.classList.remove('hide')
           coffeeCard.classList.remove('coffeeCardOn')
        }
     
     }
     
     function toggleFillColorfire(){
        
        let toggleFillColor = fireCardOn.classList.contains('hide')
        
        if(toggleFillColor){
           fireCardOn.classList.remove('hide')
           fireCardOff.classList.add('hide')
           fireCard.classList.add('fireCardOn')
        } else {
           fireCardOn.classList.add('hide')
           fireCardOff.classList.remove('hide')
           fireCard.classList.remove('fireCardOn')
        }
     
     }

     return {
        toggleFillColorRain,
        toggleFillColorTree,
        toggleFillColorcoffee,
        toggleFillColorfire
     }


}