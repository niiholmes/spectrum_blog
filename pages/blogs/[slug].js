import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { Container, Segment, Header, Card } from "semantic-ui-react";

const client = createClient({
  space: process.env.contentful_SPACE_ID,
  accessToken: process.env.contentful_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "art" });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "art",
    "fields.slug": params.slug,
  });

  return {
    props: {
      art: items[0],
      revalidate: 1,
    },
  };
}

export default function ArtDetails({ art }) {
  const { d8, author, title, imageBeta, article } = art.fields;
  return (
    <>
      <Container>
        <Segment textAlign="center" basic>
          <Header as="h4">
            {d8} - Written by {author}
          </Header>
        </Segment>

        <Segment basic textAlign="center">
          <Header as="h1">{title}</Header>
        </Segment>

        <Card centered >
          <Image
            size="huge"
            src={"https:" + imageBeta.fields.file.url}
            width={imageBeta.fields.file.details.image.width}
            height={imageBeta.fields.file.details.image.height}
            
          />
        </Card>

        <Container text textAlign="justified">
          {documentToReactComponents(article)}
        </Container>

        <Segment textAlign="center" basic style={writer}>
          <Header as="h4">-{author}</Header>
        </Segment>
      </Container>
    </>
  );
}

const writer = {
  marginTop: "2em",
};

const photo = {
  display: "block",
  marginLeft: "10em",
};
