class Solution {
    public double maxProbability(int n, int[][] edges, double[] succProb, int start, int end) {
        Map<Integer, List<double[]>> graph = new HashMap<>();

        for (int i = 0; i < edges.length; i++) {
            int s = edges[i][0];
            int e = edges[i][1];
            double prob = succProb[i];

            if (!graph.containsKey(s)) {
                graph.put(s, new ArrayList<>());
            }
            if (!graph.containsKey(e)) {
                graph.put(e, new ArrayList<>());
            }

            graph.get(s).add(new double[]{e, prob});
            graph.get(e).add(new double[]{s, prob});
        }

        PriorityQueue<double[]> queue = new PriorityQueue<>((a, b) -> Double.compare(b[1], a[1]));
        queue.offer(new double[]{start, 1.0});

        Set<Integer> visited = new HashSet<>();

        while (!queue.isEmpty()) {
            double[] curr = queue.poll();
            int node = (int) curr[0];
            double prob = curr[1];

            if (visited.contains(node)) {
                continue;
            }

            visited.add(node);

            if (node == end) {
                return prob;
            }

            if (!graph.containsKey(node)) {
                continue;
            }

            List<double[]> neighbors = graph.get(node);
            for (double[] neighbor : neighbors) {
                int nei = (int) neighbor[0];
                double p = neighbor[1];

                if (!visited.contains(nei)) {
                    queue.offer(new double[]{nei, prob * p});
                }
            }
        }

        return 0.0;        
    }
}
