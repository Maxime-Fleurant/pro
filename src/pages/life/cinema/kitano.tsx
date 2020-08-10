import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Takeshi Kitano"
      directorWiki="https://www.wikiwand.com/en/Takeshi_Kitano"
      films={[
        {
          title: 'Violent Cop',
          desc: (
            <span>
              Violent Cop (その男、凶暴につき, Sono otoko, kyōbō ni tsuki, Lit.
              'That man, being violent'), also known as Warning: This Man is
              Wild and So No Otoko Kyobo Ni Tsuki, is a 1989 Japanese film
              directed by and starring Takeshi Kitano. It was Kitano's
              directorial debut, and marked the beginning of his career as a
              filmmaker.
              <br />
              <br />
              Kitano plays detective Azuma, a Dirty Harry-type who uses violent
              methods when confronting criminals. After the suicide of his
              friend and colleague Iwaki (a vice cop who was involved with
              drugs), and the kidnapping of his sister by yakuza gangsters,
              Azuma breaks all the rules of ethical conduct. He responds to
              every situation with violence, and resorts to unethical methods if
              they produce results.
            </span>
          ),
          screen1: '/img/cinema/kitano/violentcop/screen1.jpg',
          screen2: '/img/cinema/kitano/violentcop/screen2.jpg',

          videoId: 'hSjLAj1SWRc',
          cover: '/img/cinema/kitano/violentcop/cover.jpg',
        },
        {
          title: 'Sonatine',
          desc: (
            <span>
              Sonatine (Japanese: ソナチネ, Hepburn: Sonachine) is a 1993
              Japanese yakuza film directed, written and edited by Takeshi
              Kitano, who also stars in the film. It won numerous awards and
              became one of Kitano's most successful and praised films,
              garnering him a sizable international fan base.
              <br />
              <br />
              Kitano plays Murakawa, a Tokyo-based yakuza enforcer who has grown
              tired of gangster life. He is sent by his boss to Okinawa,
              supposedly to mediate a dispute between their allies, the
              Nakamatsu and Anan clans. Murakawa openly suspects the assignment
              is an attempt to have him removed and even beats up one of his
              colleagues, Takahashi, whom he distrusts, but ends up going with
              his men. He finds that the dispute is insignificant, and while
              wondering why he was sent to Okinawa at all, the group's temporary
              headquarters are bombed and they are then ambushed in a bar,
              leaving several of his men dead.
            </span>
          ),
          screen1: '/img/cinema/kitano/sonatine/screen1.jpg',
          screen2: '/img/cinema/kitano/sonatine/screen2.jpg',

          cover: '/img/cinema/kitano/sonatine/cover.jpg',
          videoId: 'hFQTU8CFkm4',
        },
        {
          title: 'Hana-Bi',
          desc: (
            <span>
              Hana-bi (はなび, Hana-bi), released in the United States as
              Fireworks, is a 1997 Japanese crime drama film written, directed
              and edited by Takeshi Kitano, who also stars in it. The film's
              score was composed by Joe Hisaishi in his fourth collaboration
              with Kitano. Hana-bi (花火, Hanabi) is the Japanese word for
              "fireworks."
              <br />
              <br />
              The unexpected international success of Hana-bi, coupled with
              Sonatine's critical acclaim, established Kitano as one of the
              foremost Japanese filmmakers of his time.
              <br />
              <br />
              Yoshitaka Nishi (Takeshi Kitano) is a violent police detective who
              had to retire from the police after a tragic accident during a
              detention: another detective, Tanaka, was killed by the suspect,
              while two other detectives, Nakamura and Horibe, were severely
              injured. Becoming unemployed, Nishi spends most of his time taking
              care of his sick wife Miyuki (Kayoko Kishimoto), who has leukemia.
              To pay for his wife's care, Nishi borrows money from the yakuza,
              but is having difficulty repaying them.
            </span>
          ),
          screen1: '/img/cinema/kitano/hanabi/screen1.jpg',
          screen2: '/img/cinema/kitano/hanabi/screen2.jpg',
          coverRatio: 1.3,
          cover: '/img/cinema/kitano/hanabi/cover.jpg',
          videoId: 'PwTWtAE3ylY',
        },
      ]}
    />
  );
};

export default Carax;
