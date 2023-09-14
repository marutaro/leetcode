class Solution {
    public List<String> findItinerary(List<List<String>> tickets) {
        Map<String, List<String>> graph = new HashMap<>();

        for (List<String> ticket : tickets) {
            String departure = ticket.get(0);
            String arrival = ticket.get(1);

            graph.computeIfAbsent(departure, k -> new ArrayList<>()).add(arrival);
        }

        for (List<String> destinations : graph.values()) {
            destinations.sort(Collections.reverseOrder());
        }

        List<String> newItinerary = new ArrayList<>();
        Deque<String> stack = new ArrayDeque<>();
        stack.push("JFK");

        while (!stack.isEmpty()) {
            String currentAirport = stack.peek();

            if (graph.containsKey(currentAirport) && !graph.get(currentAirport).isEmpty()) {
                stack.push(graph.get(currentAirport).remove(graph.get(currentAirport).size() - 1));
            } else {
                newItinerary.add(stack.pop());
            }
        }

        Collections.reverse(newItinerary);
        return newItinerary;        
    }
}
