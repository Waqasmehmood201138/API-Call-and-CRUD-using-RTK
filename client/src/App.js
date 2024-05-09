import './App.css';
import { useGetAllPostQuery } from './services/post';

function App() {

  const responceInfo = useGetAllPostQuery()

  console.log('responce-information', responceInfo)

  return (
    <>
    </>
  );
}

export default App;
