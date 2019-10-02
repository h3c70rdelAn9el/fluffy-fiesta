import MyLayout from '../components/MyLayout';
import Link from 'next/link';

function getPosts() {
  return [
    { id: 'hello-next', title: 'Hello next' },
    { id: 'learn-next', title: 'Learn Next' },
    { id: 'deploy-next', title: 'Deploy Next' }
  ];
}

const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          margin: 5px, 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }

      `}</style>
  </li>
);

export default function Blog() {
  return (
    <MyLayout>
      <h1>Blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      


    </MyLayout>
  );
}
