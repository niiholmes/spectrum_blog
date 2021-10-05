import Head from "next/head";
import { Container, Grid, Segment } from "semantic-ui-react";
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
      revalidate: 1,
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

      <Grid style={gridSpace} divided columns={2}>
        {arts.map((art) => (
          <ArtCard key={art.sys.id} art={art} />
        ))}
      </Grid>
    </>
  );
}


const gridSpace={
  display:'flex',
  justifyContent:'space-evenly'
}