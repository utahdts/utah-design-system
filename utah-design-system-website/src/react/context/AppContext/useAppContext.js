import { useContext } from 'react';
import AppContext from './AppContext';

export default function useAppContext() {
  return useContext(AppContext);
}
