import sampleAdjacencyList from '../images/sampleAdjacencyList.png';
import vertex from '../images/vertex.png';
import edge from '../images/edge.png';
import cyclicGraph from '../images/cyclicGraph.png';
import acyclicGraph from '../images/acyclicGraph.png';
import weightedGraph from '../images/weightedGraph.png';
import weight from '../images/weight.png';
import dag from '../images/dag.png';
import adjacencyMatrix from '../images/adjacencyMatrix.png';
import undirectedGraph from '../images/undirectedGraph.png';

const vocab = [
  {
    term: 'adjacency list',
    definition:
      "one common way to represent a graph, in which vertices are stored in a 'list' (maybe actually a dictionary) and edges are stored, most likely in a set, as values for each vertex",
    imageSrc: sampleAdjacencyList,
  },
  { term: 'vertex', definition: 'a node in a graph', imageSrc: vertex },
  {
    term: 'edge',
    definition: 'a connection between vertices in a graph',
    imageSrc: edge,
  },
  {
    term: 'cyclic graph',
    definition:
      'a graph containing a cycle, for example, if you followed the edges and arrived again at an already-visited vertex',
    imageSrc: cyclicGraph,
  },
  {
    term: 'acyclic graph',
    definition:
      "a graph that doesn't contain any cycles, for example, you cannot arrive at an already-visited vertex when following the edges",
    imageSrc: acyclicGraph,
  },
  {
    term: 'weighted graph',
    definition: 'a graph where values are associated with the edges',
    imageSrc: weightedGraph,
  },
  {
    term: 'weight',
    definition: 'the specific value associated with an edge in a graph',
    imageSrc: weight,
  },
  {
    term: 'directed acyclic graph',
    definition:
      'a directed graph with no cycles, that is, every edge is directed from earlier to later in a sequence',
    imageSrc: dag,
  },
  {
    term: 'DAG',
    definition: "acronym for 'directed acyclic graph'",
    imageSrc: dag,
  },
  {
    term: 'adjacency matrix',
    definition:
      'one common way to represent a graph, consisting of a two-dimensional array. Edges, or edge weights are represented by values in the array. Another data structure would probably be needed to represent the relationship between vertices and indices of the array.',
    imageSrc: adjacencyMatrix,
  },
  {
    term: 'directed graph',
    definition: 'a graph in which edges have orientations',
    imageSrc: dag,
  },
  {
    term: 'undirected graph',
    definition: 'a graph in which edges have no orientation',
    imageSrc: undirectedGraph,
  },
];

export default vocab;
