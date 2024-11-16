import { useLocation, Navigate } from 'react-router-dom';

export function RequireQueryParams({ children, requiredParams }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const hasAllRequiredParams = requiredParams.every(param => queryParams.has(param));

  if (!hasAllRequiredParams) {
    return <Navigate to="/" replace />;
  }

  return children;
}