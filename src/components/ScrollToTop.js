import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Route 동작 시 최상단으로 스크롤을 위치시키는 컴포넌트
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
