import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
   const elementRef=useRef(null)

  useEffect(() => {
    const editor=new Editor({
      el: elementRef.current,
      hideModeSwitch: true
    })


    editor.addHook('change', () => {
      const content = editor.getMarkdown()
      onContentChange(content)
    })


    return() => {
      editor.destroy()
    }}, [onContentChange])

  return <div ref={elementRef} />
  // END
};

export default MarkdownEditor;
