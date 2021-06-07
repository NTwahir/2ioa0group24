import React, { useEffect } from "react";
import ChordGraph from './ChordGraph';

export function Graph({ data }) {
  const containerRef = React.useRef(null);

  useEffect(() => {
    let destroyFn;

    if (containerRef.current) {
      const destroy = ChordGraph(containerRef.current, data);
      destroyFn = destroy;
    }

    return destroyFn;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} />;
}