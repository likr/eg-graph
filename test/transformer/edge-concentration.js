'use strict';

import expect from 'expect.js';
import Graph from '../../src/graph';
import EdgeConcentrationTransformer from '../../src/transformer/edge-concentration';

describe('EdgeConcentrationTransformer', () => {
  describe('transform(g)', () => {
    it('returns transformed graph', () => {
      const graph = new Graph();
      const u1 = graph.addVertex();
      const u2 = graph.addVertex();
      const v1 = graph.addVertex();
      const v2 = graph.addVertex();
      const w1 = graph.addVertex();
      const w2 = graph.addVertex();
      graph.addEdge(u1, v1);
      graph.addEdge(u1, v2);
      graph.addEdge(u1, w1);
      graph.addEdge(u1, w2);
      graph.addEdge(u2, v1);
      graph.addEdge(u2, v2);
      graph.addEdge(u2, w1);
      graph.addEdge(u2, w2);
      graph.addEdge(v1, w1);
      graph.addEdge(v1, w2);
      graph.addEdge(v2, w1);
      graph.addEdge(v2, w2);
      const transformed = new EdgeConcentrationTransformer().transform(graph);
      expect(transformed.inDegree(u1)).to.be(0);
      expect(transformed.outDegree(u1)).to.be(1);
      expect(transformed.inDegree(u2)).to.be(0);
      expect(transformed.outDegree(u2)).to.be(1);
      expect(transformed.inDegree(v1)).to.be(1);
      expect(transformed.outDegree(v1)).to.be(1);
      expect(transformed.inDegree(v2)).to.be(1);
      expect(transformed.outDegree(v2)).to.be(1);
      expect(transformed.inDegree(w1)).to.be(2);
      expect(transformed.outDegree(w1)).to.be(0);
      expect(transformed.inDegree(w2)).to.be(2);
      expect(transformed.outDegree(w2)).to.be(0);
    });

    it('returns transformed graph', () => {
      const graph = new Graph();
      const u1 = graph.addVertex();
      const u2 = graph.addVertex();
      const u3 = graph.addVertex();
      const u4 = graph.addVertex();
      const v1 = graph.addVertex();
      const v2 = graph.addVertex();
      const v3 = graph.addVertex();
      const v4 = graph.addVertex();
      graph.addEdge(u1, v1);
      graph.addEdge(u1, v2);
      graph.addEdge(u2, v1);
      graph.addEdge(u2, v2);
      graph.addEdge(u3, v3);
      graph.addEdge(u3, v4);
      graph.addEdge(u4, v3);
      graph.addEdge(u4, v4);
      const transformed = new EdgeConcentrationTransformer().transform(graph);
      expect(transformed.inDegree(u1)).to.be(0);
      expect(transformed.outDegree(u1)).to.be(1);
      expect(transformed.inDegree(u2)).to.be(0);
      expect(transformed.outDegree(u2)).to.be(1);
      expect(transformed.inDegree(v1)).to.be(1);
      expect(transformed.outDegree(v1)).to.be(0);
      expect(transformed.inDegree(v2)).to.be(1);
      expect(transformed.outDegree(v2)).to.be(0);
      expect(transformed.inDegree(u3)).to.be(0);
      expect(transformed.outDegree(u3)).to.be(1);
      expect(transformed.inDegree(u4)).to.be(0);
      expect(transformed.outDegree(u4)).to.be(1);
      expect(transformed.inDegree(v3)).to.be(1);
      expect(transformed.outDegree(v3)).to.be(0);
      expect(transformed.inDegree(v4)).to.be(1);
      expect(transformed.outDegree(v4)).to.be(0);
    });

    it('returns transformed graph', () => {
      const graph = new Graph();
      const u1 = graph.addVertex();
      const u2 = graph.addVertex();
      const u3 = graph.addVertex();
      const u4 = graph.addVertex();
      const u5 = graph.addVertex();
      const v1 = graph.addVertex();
      const v2 = graph.addVertex();
      const v3 = graph.addVertex();
      const v4 = graph.addVertex();
      const v5 = graph.addVertex();
      graph.addEdge(u1, v1);
      graph.addEdge(u1, v2);
      graph.addEdge(u1, v3);
      graph.addEdge(u2, v1);
      graph.addEdge(u2, v2);
      graph.addEdge(u2, v3);
      graph.addEdge(u3, v1);
      graph.addEdge(u3, v2);
      graph.addEdge(u3, v3);
      graph.addEdge(u3, v4);
      graph.addEdge(u3, v5);
      graph.addEdge(u4, v3);
      graph.addEdge(u4, v4);
      graph.addEdge(u4, v5);
      graph.addEdge(u5, v3);
      graph.addEdge(u5, v4);
      graph.addEdge(u5, v5);
      const transformed = new EdgeConcentrationTransformer().transform(graph);
      expect(transformed.inDegree(u1)).to.be(0);
      expect(transformed.outDegree(u1)).to.be(1);
      expect(transformed.inDegree(u2)).to.be(0);
      expect(transformed.outDegree(u2)).to.be(1);
      expect(transformed.inDegree(u3)).to.be(0);
      expect(transformed.outDegree(u3)).to.be(2);
      expect(transformed.inDegree(u4)).to.be(0);
      expect(transformed.outDegree(u4)).to.be(1);
      expect(transformed.inDegree(u5)).to.be(0);
      expect(transformed.outDegree(u5)).to.be(1);
      expect(transformed.inDegree(v1)).to.be(1);
      expect(transformed.outDegree(v1)).to.be(0);
      expect(transformed.inDegree(v2)).to.be(1);
      expect(transformed.outDegree(v2)).to.be(0);
      expect(transformed.inDegree(v3)).to.be(2);
      expect(transformed.outDegree(v3)).to.be(0);
      expect(transformed.inDegree(v4)).to.be(1);
      expect(transformed.outDegree(v4)).to.be(0);
      expect(transformed.inDegree(v4)).to.be(1);
      expect(transformed.outDegree(v4)).to.be(0);
    });
  });
});
