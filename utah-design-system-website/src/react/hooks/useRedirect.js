import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * @param {object} options
 * @param {string} options.pageUrl
 * @param {boolean} [options.isImmediate]
 * @returns {{ navigate: () => void}}
 */
export function useRedirect({ pageUrl, isImmediate }) {
  const navigate = useNavigate();

  const doNavigate = useCallback(
    () => navigate(pageUrl, { replace: true }),
    [navigate, pageUrl]
  );

  useEffect(
    () => {
      if (isImmediate) {
        doNavigate();
      }
    },
    [pageUrl, doNavigate, isImmediate]
  );

  return { navigate: doNavigate };
}
