import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

import Metadata from 'components/Metadata';

import { FaMapPin } from 'react-icons/fa';
import styles from './PostCard.module.scss';
import FeaturedImage from './../FeaturedImage/FeaturedImage';
import { useRouter } from 'next/router';

const PostCard = ({ post, options = {} }) => {
  const router = useRouter();
  const isHome = router.asPath === '/';
  const { title, excerpt, slug, date, author, categories, isSticky = false, featuredImage } = post;
  const { excludeMetadata = [] } = options;

  const metadata = {};

  if (!excludeMetadata.includes('author')) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }

  let postCardStyle = styles.postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  }

  if (isHome) {
    postCardStyle = `${styles.postCardHomePage}`;
  }

  return (
    <div className={postCardStyle}>
      {isSticky && <FaMapPin aria-label="Sticky Post" />}
      <Link href={postPathBySlug(slug)}>
        <a>
          {featuredImage && isHome && (
            <FeaturedImage
              className="homePage-task-img"
              {...featuredImage}
              src={featuredImage.sourceUrl}
              dangerouslySetInnerHTML={featuredImage.caption}
            />
          )}
          <h3
            className={styles.postCardTitle}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </a>
      </Link>
      {featuredImage && !isHome && (
        <FeaturedImage
          className="homePage-task-img"
          {...featuredImage}
          src={featuredImage.sourceUrl}
          dangerouslySetInnerHTML={featuredImage.caption}
        />
      )}
      {!isHome && <Metadata className={styles.postCardMetadata} {...metadata} />}
      {excerpt && !isHome && (
        <div
          className={styles.postCardContent}
          dangerouslySetInnerHTML={{
            __html: sanitizeExcerpt(excerpt),
          }}
        />
      )}
    </div>
  );
};

export default PostCard;
