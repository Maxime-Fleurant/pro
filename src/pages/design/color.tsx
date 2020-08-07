import { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import {
  quote,
  colorAnime1,
  colorAnime2,
  colorAnime3,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import { SimpleCell } from '../../common/components/Cell/SimpleCell';
import ArticleHead from '../../common/components/Article/ArticleHead/ArticleHead';
import { mainText } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { ITheme } from '../../common/components/Layout/Theme';

const Apollo: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [{ name: 'Intro', href: '#intro' }],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/Color',
                outside: true,
              },
            ],
          },
        ]}
      />

      <SimpleCell
        deskPos={{ rowStart: 9, rowEnd: 12, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          titleContent="Color"
          logo={<span>🎨</span>}
          desc="Any ground subtracts its own hue from the colors which it carries and therefore influences."
          official="https://color.adobe.com/create/color-wheel"
          wiki="https://en.wikipedia.org/wiki/Color"
          detail="Design | Hue"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>
          "Color directly influences the soul. Color is the keyboard, the eyes
          are the hammers, the soul is the piano with many strings. The artist
          is the hand that plays, touching one key or another purposively, to
          cause vibrations in the soul."
          <br />
          <span css={quote}>-Kandinsky</span>
          <br />
          <br />
          "As basic rules of a language must be practiced continually, and
          therefore are never fixed, so exercises toward distinct color effects
          never are done or over. New and different cases will be discovered
          time and again."
          <br />
          <span css={quote}>-Joseph Albers</span>
          <br />
          <br />
          "Colors are primordial ideas, children of the aboriginal colorless
          light and its counterpart, colorless darkness Light, that first
          phenomenon of the world, reveals to us the spirit and the living soul
          of the world through colors."
          <br />
          <span css={quote}>-Johannes Itten</span>
        </div>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 13, columnEnd: 16 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 9 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 9 }}
        extraCss={[colorAnime1(theme)]}
        ratio={3}
      />

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 16, columnEnd: 19 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 9, columnEnd: 17 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 9, columnEnd: 17 }}
        extraCss={[colorAnime2(theme)]}
        ratio={3}
      />

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 19, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 17, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 17, columnEnd: 25 }}
        extraCss={[colorAnime3(theme)]}
        ratio={3}
      />
    </>
  );
};

export default Apollo;
