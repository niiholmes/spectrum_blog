import Head from "next/head";
import { Container, Segment } from "semantic-ui-react";
import { createClient } from "contentful";
import ArtCard from "../../lib/atom/artCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.contentful_SPACE_ID,
    accessToken: process.env.contentful_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "art" });

  return {
    props: {
      arts: res.items,
    },
  };
}

export default function myBlogs({ arts }) {
  console.log(arts);
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>

      <Segment basic>
        <Container>
          {arts.map((art) => (
            <ArtCard key={art.sys.id} art={art} />
          ))}
        </Container>
      </Segment>
    </>
  );
}
