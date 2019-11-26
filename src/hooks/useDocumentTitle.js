import { useEffect } from 'react';

function useDocumentTitle(count) {
  useEffect(() => {
    console.log('useEffect');
    document.title = `Count ${count}`;
  }, [count]);
}

export default useDocumentTitle;
