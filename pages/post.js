import { useRouter } from 'next/router';
import MyLayout from '../components/MyLayout';

const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, at!</p>
    </>
  );
};

const Page = () => {

  return (
    <MyLayout>
      <Content />
    </MyLayout>
  );
};

export default Page;
