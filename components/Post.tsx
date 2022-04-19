type IPosts = {
  id: number;
  body: string;
  title: string;
};
export const Post = (props: IPosts) => {
  return (
    <div className="my-5 w-full rounded-lg bg-gray-100 px-4 py-5 font-mono">
      <h1 className="font-bold">
        {props.id} . {props.title}
      </h1>
      <p>{props.body}</p>
    </div>
  );
};
