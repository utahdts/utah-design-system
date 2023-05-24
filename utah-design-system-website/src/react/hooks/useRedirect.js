// @ts-check
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * @param {object} options
 * @param {string} options.pageUrl
 * @param {boolean} [options.isImmediate]
 * @returns {{ navigate: () => void}}
 */
export default function useRedirect({ pageUrl, isImmediate }) {
  const navigate = useNavigate();

  const doNavigate = useCallback(
    () => navigate(pageUrl),
    [pageUrl]
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
