import React from "react";
import NodeLink from './NodeLink';

export function Graph({ data }) {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    let destroyFn;

    if (containerRef.current) {
      const destroy = NodeLink(containerRef.current, data);
      destroyFn = destroy;
    }

    return destroyFn;
  }, []);

  return <div ref={containerRef} />;
}