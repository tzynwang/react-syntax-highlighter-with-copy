import React, { memo } from 'react';
import { kimbieDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeBlock from '@Components/Common/CodeBlock';

function App(): React.ReactElement {
  /* States */
  const codeString = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim nemo neque libero, repellat a quisquam deleniti ex veritatis natus.';

  /* Main */
  return (
    <CodeBlock code={codeString} style={kimbieDark} language="javascript" wrapLongLines />
  );
}

export default memo(App);
