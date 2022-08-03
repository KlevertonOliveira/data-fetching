import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Repository = {
  full_name: string;
  description: string;
}

export function Repos() {

  const { data: repositories, error, isFetching } =
    useQuery<Repository[]>(['repos'], async () => {
      const response = await axios.get('https://api.github.com/users/KlevertonOliveira/repos')
      return response.data;
    }, {
      staleTime: 1000 * 60 // 1 minute 
    });

  if (isFetching) return <h3>Loading...</h3>

  if (error) return <h3>An error has ocurred.</h3>

  return (
    <ul>
      {repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <Link to={`repos/${repo.full_name}`}>{repo.full_name}</Link>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}