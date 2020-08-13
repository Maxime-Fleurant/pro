import Head from 'next/head';
import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { mainLayer } from '../../common/components/Article/CodeBrowser/codes/3layer';
import { drymain } from '../../common/components/Article/CodeBrowser/codes/dry';
import TextLink from '../../common/components/Article/textLink/TextLink';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';

const Dry = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>DRY</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [{ name: 'Intro', href: '#intro' }],
          },

          {
            name: 'My Code',
            items: [
              {
                name: 'Nest-Rest',
                href: 'https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api',
                outside: true,
              },
              {
                name: 'GraphQL-Api',
                href: 'https://github.com/Maxime-Fleurant/GraphQL-Anime-Api',
                outside: true,
              },
            ],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself',
                outside: true,
              },
            ],
          },

          {
            name: 'Related',
            items: [
              {
                name: 'Nest',
                href: '/compute/nest',
                domain: true,
              },
              {
                name: 'TypeGraphQL',
                href: '/compute/typegraphql',
                domain: true,
              },
            ],
          },
        ]}
      />

      <Article
        articleHeader={{
          titleContent: 'DRY',
          logo: <span>🌵</span>,
          desc:
            "Don't repeat yourself (DRY, or sometimes do not repeat yourself) is a principle of software development aimed at reducing repetition of software patterns, replacing it with abstractions or using data normalization to avoid redundancy",
          wiki: 'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself',
          detail: 'Pattern | Code',
        }}
        headerContent={
          <span>
            <a id="intro" css={anchorPos} />
            The DRY principle is stated as "Every piece of knowledge must have a
            single, unambiguous, authoritative representation within a system".
            <br />
            <br />
            The principle has been formulated by Andy Hunt and Dave Thomas in
            their book The Pragmatic Programmer. They apply it quite broadly to
            include "database schemas, test plans, the build system, even
            documentation".
            <br />
            <br /> When the DRY principle is applied successfully, a
            modification of any single element of a system does not require a
            change in other logically unrelated elements. Additionally, elements
            that are logically related all change predictably and uniformly, and
            are thus kept in sync.
            <br />
            <br />
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using Dry Pattern :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Nest-Rest-Anime-Api "
                href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api"
              />{' '}
              /
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" GraphQL-Anime-Api "
                href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
              />{' '}
            </span>
          </span>
        }
        headerCode={{
          code: drymain,
          language: 'language-js',
        }}
        content={[]}
      />
    </>
  );
};

export default Dry;
