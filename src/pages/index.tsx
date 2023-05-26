import { Mixer } from '@/components/Mixer';
import { RenderOnMount } from '@/components/RenderOnMount';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';
import { Anchor, H1, P, Switch, Text, useTheme } from 'flair-kit';
import { css } from 'goober';
import { Moon, Sun } from 'iconic-react';

export default function HomePage() {
  const {
    space,
    colors,
    fontSizes,
    mobileFontSizes,
    toggleColorScheme,
    colorScheme,
    mediaQuery,
  } = useTheme();

  return (
    <>
      <PageMetaTags />
      <div
        className={css`
          padding: ${space['xl']};
          margin: 0 auto;
          max-width: 900px;
          text-align: center;

          ${mediaQuery.onMobileUp} {
            padding: ${space['3xl']} ${space.xl};
          }
        `}
      >
        <div
          className={css`
            display: flex;
            height: 26px;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Anchor
            href="https://github.com/jackyef/tranquil"
            className={css`
              margin-right: ${space.lg};
            `}
          >
            Code for Tranquil
          </Anchor>
          <RenderOnMount>
            <Switch
              size="md"
              enabled={colorScheme === 'dark'}
              icon={
                colorScheme === 'dark' ? (
                  <Moon fill={colors.primary[500].color} />
                ) : (
                  <Sun fill={colors.secondary[700].color} />
                )
              }
              onChange={toggleColorScheme}
              label="Dark color scheme"
            />
          </RenderOnMount>
        </div>
        <H1>
          <Text gradient={['primary', 'success']}>Tranquil</Text>
        </H1>

        <P
          className={css`
            font-size: ${mobileFontSizes.h3} !important;

            ${mediaQuery.onMobileUp} {
              font-size: ${fontSizes.h3} !important;
            }
          `}
        >
          Environmental sounds to fill the{' '}
          <Text
            className={css`
              font-weight: 700;
              text-shadow: 0px 0px 12px ${colors.foreground[700].color};
            `}
            variant="background"
          >
            void
          </Text>{' '}
        </P>

        <Mixer />
      </div>
    </>
  );
}
