module.exports = function main({distance, parkTime}) {

    if(distance > 0 && distance < 2){
        return Math.round(6 + parkTime * 0.25)
    }else if(distance > 2 && distance < 8){
        return Math.round(6 + (distance - 2) * 0.8 + parkTime * 0.25)
    }else {
        return Math.round(6 + (distance - 2) * 0.8 + (distance - 8) * 0.4 + parkTime * 0.25)
    }


   /*
   *
   * Much more elegant way 
   *
   *return Math.round(
       6 + parkTime * 0.25 +
       Math.max(0, (distance - 2) * 0.8) +
       Math.max(0, (distance - 8) * 0.4)
   )
   */
};
