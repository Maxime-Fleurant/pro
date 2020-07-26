import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SerializedStyles, jsx } from '@emotion/core';

const CLink: FunctionComponent<{
  href: string;
  main?: boolean;
  activeCss?: SerializedStyles | SerializedStyles[];
  nonActiveCss?: SerializedStyles | SerializedStyles[];
}> = ({ href, children, main, activeCss, nonActiveCss }) => {
  const router = useRouter();

  const cloneElement = (element, props) =>
    jsx(element.type, {
      key: element.key,
      ref: element.ref,
      ...element.props,
      ...props,
    });

  let currentCss = nonActiveCss;

  if (main && router.pathname.split('/')[1] === href.split('/')[1]) {
    currentCss = activeCss;
  }

  if (router.pathname === href) {
    currentCss = activeCss;
  }

  return <Link href={href}>{cloneElement(children, { css: currentCss })}</Link>;
};

export default CLink;
