import Head from 'next/head'
export default function Details({ post }) {
  return (
    <>

    <Head>
        <title>Article</title>
    </Head>
      <h2>
        {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: {
        detailsId: post.id.toString()
      },
    };
  });
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  const id = context.params.detailsId

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
