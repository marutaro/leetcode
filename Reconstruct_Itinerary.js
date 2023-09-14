/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = new Map();

    for (const [departure, arrival] of tickets.sort().reverse()) {
        if (!graph.has(departure)) {
            graph.set(departure, []);
        }
        graph.get(departure).push(arrival);
    }

    const stack = ["JFK"];
    const newItinerary = [];

    while (stack.length > 0) {
        const currentAirport = stack[stack.length - 1];

        if (graph.has(currentAirport) && graph.get(currentAirport).length > 0) {
            stack.push(graph.get(currentAirport).pop());
        } else {
            newItinerary.push(stack.pop());
        }
    }

    return newItinerary.reverse();    
};
