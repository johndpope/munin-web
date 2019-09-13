import React, { useEffect, useRef } from 'react';

const ExpandingTextarea = (props : ExpandingTextFieldProps & React.HTMLProps<HTMLTextAreaElement>) => {
        const ref = useRef(null);

        useEffect(() => updateHeight(ref.current) , [props.value]);

        return <textarea {...props} ref={ref}/>;
}

function updateHeight(el: HTMLTextAreaElement | null) {
    if (!el) return;
    /*const { borderBottomWidth,
        borderTopWidth,
        lineHeight,
        paddingBottom,
        paddingTop } = window.getComputedStyle(el as Element); */
    el.style.height = '0';
    const totalHeight =  el.scrollHeight;
    el.style.height = `${totalHeight}px`;
}

interface ExpandingTextFieldProps {
    //onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

interface ExpandingTextFieldState {
    textAreaRef :  React.RefObject<HTMLTextAreaElement>;
}

export default ExpandingTextarea;