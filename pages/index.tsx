import { Post } from "@/components/Post";
import { useState } from "react";
type IPosts = {
  posts: [IItems];
};

type IItems = {
  id: number;
  title: string;
  body: string;
};

const Home = ({ posts }: IPosts) => {
  const [start, setStart] = useState<number>(5);
  const [data, setData] = useState<any>(posts);
  async function loadMore() {
    const req = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`
    );
    const newPost = await req.json();

    setData([...data, ...newPost]);
    setStart(start + 5);
  }
  return (
    <div className="relative mx-auto h-screen max-w-3xl">
      {data.map((items: any) => {
        return (
          <Post
            key={items.id}
            id={items.id}
            title={items.title}
            body={items.body}
          />
        );
      })}
      <button
        className="my-4 w-full rounded-lg bg-gray-200 p-4"
        onClick={loadMore}
      >
        Load More Post
      </button>
    </div>
  );
};

export async function getServerSideProps() {
  const req = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
  );
  const posts = await req.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
