import './App.css';
import { useGetAllPostQuery } from './services/post';

function App() {

  const { data , error, isLoading} = useGetAllPostQuery()

  const responceInfo = useGetAllPostQuery()

  console.log('responce-information', responceInfo)

  return (
    <>
    <h1>data</h1>
    </>
  );
}

export default App;
