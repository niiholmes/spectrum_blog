export default function Details({ post }) {
  return (
    <>
      <h2>
        {post.id} - {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}clearImmediate

export async function getStaticPaths() {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: {
        detailsId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${params.detailsId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
