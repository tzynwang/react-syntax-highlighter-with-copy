import React, { memo, useMemo } from 'react';
import Code from 'react-syntax-highlighter';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import useCopy from '@Hooks/useCopy';
import type { CodeBlockProps } from './types';

const CodeContainer = styled('div')(() => ({
  position: 'relative',
  '&:hover .IconButton': {
    opacity: 1
  }
}));
const IconButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  opacity: 0,
  transition: `opacity ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeIn}`
}));

function CodeBlock(props: CodeBlockProps): React.ReactElement {
  /* States */
  const { code, style, ...rest } = props;
  const [copyDone, handleCopy] = useCopy();
  const copyIcon = useMemo(() => {
    const iconStyle = {
      color: style ? style['hljs-comment']?.color : undefined,
      fontSize: '1rem'
    };
    if (copyDone) {
      return <DoneIcon sx={iconStyle} />;
    }
    if (copyDone === false) {
      return <CloseIcon sx={iconStyle} />;
    }
    return <ContentCopyIcon sx={iconStyle} />;
  }, [copyDone, style]);

  /* Functions */
  const handleIconButtonClick = (): void => {
    handleCopy(code);
  };

  /* Main */
  return (
    <CodeContainer className="CodeContainer">
      <Code style={style} {...rest}>
        {code}
      </Code>
      <IconButton
        onClick={handleIconButtonClick}
        className="IconButton"
        disableFocusRipple
        disableRipple
      >
        {copyIcon}
      </IconButton>
    </CodeContainer>
  );
}

export default memo(CodeBlock);
