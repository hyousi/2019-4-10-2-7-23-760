module.exports = function main(inputs) {
    // write your code here...
    if (inputs.distance<=2) {
        return Math.round( 6 + 0.25*inputs.parkTime );
    } else if (inputs.distance <=8) {
        return Math.round( 6 + 0.8*(inputs.distance-2) +0.25*inputs.parkTime );
    } else {
        return Math.round(10.8 + 1.2*(inputs.distance-8) + 0.25*inputs.parkTime);
    }
    return "price";
};
