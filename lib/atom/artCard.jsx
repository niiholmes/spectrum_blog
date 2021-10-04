import Link from "next/link";
import Image from "next/image";
import { Segment, Header } from "semantic-ui-react";

export default function ArtCard({ art }) {
  const { title, d8, slug, pic } = art.fields;
  return (
    <div>
      <Segment basic style={segmentMini} key={art.sys.id}>
        <Link href={`/blogs/${slug}`} passHref>
          <Segment basic style={segmentMicro}>
            <div>
              <Image 
                src={"https:" + pic.fields.file.url}
                width={pic.fields.file.details.image.width}
                height={pic.fields.file.details.image.height}
              />
            </div>
            <div>
              <Header
                as="h3"
                style={{ marginTop: "1em", marginLeft: "2em" }}
                textAlign="center"
              >
                {d8}
              </Header>
            </div>
            <div>
              <Header
                as="h1"
                style={{ marginTop: "1em", marginLeft: "2em" }}
                textAlign="center"
              >
                {title}
              </Header>
            </div>
          </Segment>
        </Link>
      </Segment>
    </div>
  );
}

const segmentMini = {
  display: "flex",
  justifyContent: "space-between",
};

const segmentMicro = {
  marginLeft: "1em",
  width: "40em",
};
