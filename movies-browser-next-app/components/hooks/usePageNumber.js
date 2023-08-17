import React, { useEffect, useRef } from "react";

const usePageNumber = (loading,setPageNumber,hasMore,otherConditions = true) => {
  const ref = useRef(null);
  useEffect(() => {
    let r = ref.current;
    const observer = new IntersectionObserver((entries) => {
       if(loading || !hasMore || !otherConditions) return
      if (entries[0].isIntersecting) {
       setPageNumber(prev=>prev + 1)
      }
    });
    if (ref.current) observer.observe(r);

    return () =>r && observer.unobserve(r);
  }, [ref,loading,hasMore,setPageNumber,otherConditions]);
  return { loadingElement: ref };
};

export default usePageNumber;
