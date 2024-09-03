import HomePage from '@/app/Components/HomePage/HomePage';

export default async function Home() {
  const data = await fetch(
    'http://localhost:8000/api/v2/pages/?type=home.HomePage&fields=*',
  ).then((response) => response.json());
  const page = data.items[0];

  return <HomePage page={page} />;
}
