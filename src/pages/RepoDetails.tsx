import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export function RepoDetails() {

  const params = useParams();
  const currentRepository = params['*'] as string;

  const queryClient = useQueryClient();

  // Function that disables stale time temporarily to update content when user returns to main page!
  async function handleChangeRepositoryDescription() {
    await queryClient.invalidateQueries(['repos']);
  }

  return (
    <div>
      <h1>{currentRepository}</h1>
      <button
        onClick={handleChangeRepositoryDescription}
      >

      </button>
    </div>
  )
}