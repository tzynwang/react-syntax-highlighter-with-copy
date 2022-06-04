import React, { memo, useMemo } from 'react';
import Code from 'react-syntax-highlighter';
import { kimbieDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import useCopy from '@Hooks/useCopy';

const CodeContainer = styled('div')(() => ({
  position: 'relative',
  '&:hover .IconButton': {
    opacity: 1
  }
}));
const IconButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  opacity: 0,
  transition: `opacity ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeIn}`
}));

function App(): React.ReactElement {
  /* States */
  const codeString = `function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
      key:\`code-segment-\${childrenCount}-\${i}\`
    }));
  }
}

function createElement({ node, style, useInlineStyles, key }) {
  const { properties, type, tagName, value } = node;
  if (type === "text") {
    return value;
  } else if (tagName) {
    const TagName = tagName;
    const childrenCreator = createChildren(style, useInlineStyles);
    const props = (
      useInlineStyles
      ? { style: createStyleObject(properties.className, style) }
      : { className: createClassNameString(properties.className) }
    );
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}`;
  const [copyDone, handleCopy] = useCopy();
  const copyIcon = useMemo(() => {
    const iconStyle = {
      color: kimbieDark['hljs-comment']?.color,
      fontSize: '1rem'
    };
    if (copyDone) {
      return <DoneIcon sx={iconStyle} />;
    }
    if (copyDone === false) {
      return <CloseIcon sx={iconStyle} />;
    }
    return <ContentCopyIcon sx={iconStyle} />;
  }, [copyDone]);

  /* Main */
  return (
    <React.Fragment>
      <CssBaseline />
      <CodeContainer>
        <Code language="javascript" style={kimbieDark} wrapLongLines>
          {codeString}
        </Code>
        <IconButton
          onClick={() => handleCopy(codeString)}
          className="IconButton"
        >
          {copyIcon}
        </IconButton>
      </CodeContainer>
    </React.Fragment>
  );
}

export default memo(App);
