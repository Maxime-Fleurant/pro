import { useEffect } from 'react';
import { coverImage } from '../Layout/style';

const ArticleImage = ({ image }) => {
  useEffect(() => {
    const imgSrc = image;
    const imgLoad = new window.Image();
    console.log('1');
    imgLoad.src = imgSrc;
    imgLoad.onload = (event) => {
      console.log('load');
    };
    console.log('2');

    return () => {
      console.log('unmount');
      delete imgLoad;
    };
  }, []);

  return <img src={image} alt="" css={coverImage} />;
};

export default ArticleImage;
