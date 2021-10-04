import { createClient } from "contentful";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Image from "next/image";

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
      revalidate: 1
    },
  };
}

export default function ArtDetails({ art }) {
  const { d8, author, title, imageBeta, article } = art.fields;
  return (
    <div>
      <div>
        {d8}.Written by {author}
      </div>
      <div>{title}</div>
      <div>
        <Image
          src={"https:" + imageBeta.fields.file.url}
          width={imageBeta.fields.file.details.image.width}
          height={imageBeta.fields.file.details.image.height}
        
        />
      </div>
      <div>
        <div>{documentToReactComponents(article)}</div>
      </div>
    </div>
  );
}
