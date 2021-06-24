import React, { useEffect } from "react";
import NodeLink from './graphs/NodeLink';
import ChordGraph from './graphs/ChordGraph';
import NodeGraph from './graphs/NodeGraph';
import { interaction } from './LinkedInteraction';


export function Graph({ data, type }) {
  const containerRef = React.useRef(null);

  useEffect(() => {
    let destroyFn;
    // renders either the viz 1 or viz 2, based on the type parm.
    destroyFn =
    containerRef.current && type === 1 ? NodeLink(containerRef.current, data) :
    containerRef.current && type === 2 ? ChordGraph(containerRef.current, data) :
    containerRef.current && type === 3 ? NodeGraph(containerRef.current, data) :
    null;

    return destroyFn;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  interaction();
  return <div ref={containerRef} />;
}