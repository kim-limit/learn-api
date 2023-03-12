import { useCallback, useEffect, useRef, useState } from "react";

const useInfiniteScroll = (targetElement) => {
  const observerRef = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) =>
        setIntersecting(entries.some((entry) => entry.isIntersecting))
      );
    }
    return observerRef.current;
  }, [observerRef.current]);

  useEffect(() => {
    if (targetElement.current) getObserver().observe(targetElement.current);

    return () => getObserver().disconnect();
  }, [targetElement.current]);
  return intersecting;
};
export default useInfiniteScroll;
