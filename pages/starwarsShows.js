import MyLayout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const StarWarsIndex = props => (
  <MyLayout>
    <h1>Star Wars TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/sw/[id]" as={`/sw/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </MyLayout>
);

StarWarsIndex.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=star+wars');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default StarWarsIndex;
