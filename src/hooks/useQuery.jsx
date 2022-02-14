import react from "react";
import { useLocation } from "react-router-dom";

export function useQuery() {
  const { search } = useLocation();

  return react.useMemo(() => new URLSearchParams(search), [search]);
}