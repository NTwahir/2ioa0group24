import React, { useEffect } from "react";
import NodeLink from './NodeLink';
import ChordGraph from './ChordGraph';

export function Graph({ data, type }) {
  const containerRef = React.useRef(null);

  useEffect(() => {
    let destroyFn;
    // renders either the viz 1 or viz 2, based on the type parm.
    destroyFn =
    containerRef.current && type === 1 ? NodeLink(containerRef.current, data) :
    containerRef.current && type === 2 ? ChordGraph(containerRef.current, data) :
    null;

    return destroyFn;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} />;
}