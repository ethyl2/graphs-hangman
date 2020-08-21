const vocab = [
  {
    term: 'adjacency list',
    definition:
      "one common way to represent a graph, in which vertices are stored in a 'list' (maybe actually a dictionary) and edges are stored, most likely in a set, as values for each vertex",
  },
  { term: 'vertex', definition: 'a node in a graph' },
  { term: 'edge', definition: 'a connection between vertices in a graph' },
  {
    term: 'cyclic graph',
    definition:
      'a graph containing a cycle, for example, if you followed the edges and arrived again at an already-visited vertex',
  },
  {
    term: 'acyclic graph',
    definition:
      "a graph that doesn't contain any cycles, for example, you cannot arrive at an already-visited vertex when following the edges",
  },
  {
    term: 'weighted graph',
    definition: 'a graph where values are associated with the edges',
  },
  {
    term: 'weight',
    definition: 'the specific value associated with an edge in a graph',
  },
  {
    term: 'directed acyclic graph',
    definition:
      'a directed graph with no cycles, that is, every edge is directed from earlier to later in a sequence',
  },
  { term: 'DAG', definition: "acronym for 'directed acyclic graph" },
  {
    term: 'adjacency matrix',
    definition:
      'one common way to represent a graph, consisting of a two-dimensional array. Edges, or edge weights are represented by values in the array. Another data structure would probably be needed to represent the relationship between vertices and indices of the array.',
  },
  {
    term: 'directed graph',
    definition: 'a graph in which edges have orientations',
  },
  {
    term: 'undirected graph',
    definition: 'a graph in which edges have no orientation',
  },
];

export default vocab;
