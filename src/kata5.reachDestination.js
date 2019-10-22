const reachDestination = (distance, speed) => {
    const time = (distance / speed);
    const result = (Math.round(time * 2) /2).toFixed(1);
    return 'I should be there in ' + result + ' hours'
};

module.exports = reachDestination;
