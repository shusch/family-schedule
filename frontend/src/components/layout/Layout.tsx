import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div css={wrapper}>
      <main css={mainContainer}>{children}</main>
    </div>
  );
};

const wrapper = css({
  background: '#f5f5f5',
  minHeight: '100%',
});

const mainContainer = css({
  margin: '0 auto',
  padding: '60px 0',
  width: '80%',
  maxWidth: '960px',
});
