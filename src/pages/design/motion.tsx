import { FunctionComponent } from 'react';
import Head from 'next/head';
import Particles from 'react-tsparticles';

import Fade from 'react-reveal/Fade';
import { useTheme } from 'emotion-theming';
import {
  animeMainTextHeader,
  motionPart,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import { SimpleCell } from '../../common/components/Cell/SimpleCell';
import ArticleHead from '../../common/components/Article/ArticleHead/ArticleHead';
import { mainText } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { ITheme } from '../../common/components/Layout/Theme';
import LogoAnimeFull from '../../common/components/Layout/logoAnimeFull';

const Apollo: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <Head>
        <title>Motion</title>
      </Head>
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
                href: 'https://en.wikipedia.org/wiki/Motion_graphic_design',
                outside: true,
              },
            ],
          },
        ]}
      />

      <SimpleCell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          titleContent="Motion"
          logo={<span>💠</span>}
          desc="Every drawing can be understood as a motion study since it is a path
          of motion recorded by graphic means."
          wiki="https://en.wikipedia.org/wiki/Motion_graphic_design"
          detail="Design | Type"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
      >
        <div
          css={[mainText(theme), animeMainTextHeader]}
          className="animate__fadeInUp"
        >
          Time and motion are closely related principles. Any word or image that
          moves functions both spatially and temporally. Motion is a kind of
          change, and change takes place in time. Motion can be implied as well
          as literal, however. Artists have long sought ways to represent the
          movement of bodies and the passage of time within the realm of static,
          two-dimensional space.
          <br />
          <br /> Time and motion are considerations for all design work, from a
          multipage printed book, whose pages follow each other in time, to
          animations for film and television, which have literal duration. Any
          still image has implied motion (or implied stasis), while motion
          graphics share compositional principles with print.
          <br />
          <br /> Designers today routinely work in time-based media as well as
          print, and a design campaign often must function across multiple media
          simultaneously.
        </div>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 13, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
        relative
        ratio={1}
      >
        <div css={motionPart}>
          <Fade duration={1500}>
            <Particles
              id="tsparticles"
              options={{
                fpsLimit: 60,
                interactivity: {
                  detectsOn: 'window',
                  events: {
                    onHover: {
                      enable: true,
                      mode: 'grab',
                    },
                    resize: true,
                  },
                  modes: {
                    grab: {
                      distance: 100,
                    },
                  },
                },
                particles: {
                  color: {
                    value: theme.base.baseColor900,
                  },
                  links: {
                    color: theme.base.baseColor600,
                    distance: 120,
                    enable: true,
                    opacity: 0.5,
                    width: 0.5,
                  },

                  move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: false,
                    speed: 2.5,
                    straight: false,
                  },
                  number: {
                    value: 60,
                  },
                  opacity: {
                    value: 1,
                  },
                  shape: {
                    type: 'edge',
                  },
                  size: {
                    value: 1,
                  },
                },
                detectRetina: true,
              }}
            />
          </Fade>
        </div>
      </SimpleCell>
    </>
  );
};

export default Apollo;
