import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
  return (
    <div>
      <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.subtitle}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default PostPreview;
