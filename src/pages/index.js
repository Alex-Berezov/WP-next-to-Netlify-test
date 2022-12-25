import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';

import styles from 'styles/pages/Home.module.scss';
import { useState, useEffect } from 'react';
import { getHomePageInfo } from 'lib/site';
import ViewAllTasks from '../components/WatchAllTasks/ViewAllTasks';

export default function Home({ posts }) {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  const [homePageData, setHomePageData] = useState({});

  async function fetchHomePagedata() {
    const response = await getHomePageInfo();
    setHomePageData(response);
  }

  useEffect(() => {
    fetchHomePagedata();
  }, []);

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{
            __html: homePageData.title,
          }}
        />

        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: homePageData.content,
          }}
        />
      </Header>

      <Section>
        <Container>
          <h2 className="sr-only">Posts</h2>
          <ul className={styles.posts}>
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>
          <ViewAllTasks />
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { posts } = await getPaginatedPosts({
    queryIncludes: 'all',
  });

  return {
    props: {
      posts,
    },
  };
}
