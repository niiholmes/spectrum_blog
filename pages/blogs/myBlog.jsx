import Head from "next/head";
import Link from "next/link";
import {
  Card,
  Container,
  Grid,
  Image,
  Segment,
  Header,
} from "semantic-ui-react";

export default function myBlogs({ posts }) {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>

      <Segment basic size="large">
        <Container>
          {posts.map((post) => (
            <Segment basic style={segmentMini}>
              <Link href={`/blogs/${post.id}`} key={post.id} passHref>
                <Segment basic style={segmentMicro}>
                  <Header
                    as="h1"
                    style={{ marginTop: "7em", marginLeft: "2em" }}
                    textAlign=""
                  >
                    {post.title}
                  </Header>
                  <Header
                    as="h5"
                    style={{ marginLeft: "4em", fontWeight: "bold" }}
                  >
                    {post.body}
                  </Header>
                </Segment>
              </Link>
            </Segment>
          ))}
        </Container>
      </Segment>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}

const segmentMini = {
  display: "flex",
  justifyContent: "space-between",
};

const segmentMicro = {
  marginLeft: "1em",
  width: "40em",
};
