function fireFight(s){
    return s.split(' ').map( word => word.replace('Fire','~~')).join(' ')
}
fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast")