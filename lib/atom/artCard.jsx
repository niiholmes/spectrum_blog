import Link from "next/link";
// import Image from "next/image";
import { Header, Image } from "semantic-ui-react";

export default function ArtCard({ art }) {
  const { title, d8, slug, pic, } = art.fields;
  console.log(art);
  return (
    <div style={segmentMini} key={art.sys.id}>
      <div>
      <Image centered
        src={"https:" + pic.fields.file.url}
        width={pic.fields.file.details.image.width}
        height={pic.fields.file.details.image.height}
        size='large'
      />
<div  style={{marginTop:"2em", textAlign:'center', marginBottom:'4em'}}>
      <Header
        as="h3"
        
        textAlign="center"
      >
        {d8}
      </Header>

      <Link href={`/blogs/${slug}`} passHref>
        <Header
          as="h1"
          
          textAlign="center"
        >
          {title}
        </Header>
      </Link>
      </div>
      </div>
    </div>
  );
}

const segmentMini = {};

const segmentMicro = {
  marginLeft: "1em",
  width: "40em",
};
