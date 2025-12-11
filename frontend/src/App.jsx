import { useEffect } from 'react'
import AppRoutes from './routes/routes'
import useMemberStore from './stores/useMemberStore'
import useBoardStore from './stores/useBoardStore'

function App() {
  const { initialize } = useMemberStore();
  const { initializeBoard } = useBoardStore();

  useEffect(() => {
    initialize(); 
    initializeBoard();
  }, [])

  return (
    <AppRoutes />
  )
}

export default App