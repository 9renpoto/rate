import styled from 'styled-components'

export type Props = {
  col2: string;
}

export const Content = styled.div`
  margin: 0 2rem;

  & + & {
    margin: 0.625rem 2rem 0;
  }

  ${(props: Props) =>
    props.col2 &&
    `
    display: flex;

    > * {
      width: 50%;
    }

    > * + * {
      margin-left: 0.625rem;
    }

    @media (max-width: 48rem) {
      display: block;

      > * {
        width: 100%;
        box-sizing: border-box;

        + * {
          margin-left: 0;
          margin-top: .625rem;
        }
      }
    }
  `};
`

export const ContentInner = styled.div`
  padding: 1.875rem 1.25rem;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.12);
`
