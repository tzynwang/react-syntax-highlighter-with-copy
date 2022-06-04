import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';

type SyntaxHighlighterPropsWithoutChildren = Omit<
  SyntaxHighlighterProps,
  'children'
>;

export interface CodeBlockProps extends SyntaxHighlighterPropsWithoutChildren {
  code: string;
  style?: { [key: string]: React.CSSProperties };
}
