import { useFetch } from './hooks/useFetch';

type Repository = {
  full_name: string;
  description: string;
}

function App() {

  const { data: repositories, isFetching, error } =
    useFetch<Repository[]>('/users/KlevertonOliveira/repos');

  if (isFetching) return <h3>Loading...</h3>

  if (error) return <h3>An error has ocurred.</h3>

  return (
    <ul>
      {repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
