Remember, when constructing the Ancestor Graph (similar, but not the same as the Line Graph):

1. Label each node of G lexographically.
2. For the Parent Graph, this is the same as the Line Graph, but label each node with the vertices incident on the edge.
For example, if G is a triangle (a-b, b-c, a-c), the parent of G is also a 'triangle' but labeled, too, like this: (ab-bc, bc-ac, ac-ab)
Note that this graph has 3 edges and 3 nodes (ab, bc, ac).
3. For the Grandparent Graph, this is NOT the same as the Line Graph of the Parent Graph.
However, do the same approach as in constructing the line graph. However, do not create a vertex for an edge if a same-labeled node already has been made.
For the case where G is a triangle, this graph becomes (abc), the single vertex.

Note: Always label in lexographical order. With each generation, the length of the labels will increase by 1 invariably.
