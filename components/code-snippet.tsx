'use client'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import nord from 'react-syntax-highlighter/dist/esm/styles/prism/nord';

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

// SyntaxHighlighter.registerLanguage('python', python)

export const CodeSnippet = ({ code_string }: { code_string: string }) => {

  return (
    <div >
        <div className='border-t text-md border-r border-l border-transparent-white mx-[1rem] px-[1.5rem] bg-transparent-white rounded-t-[7px] overflow-hidden'> 
            <div className='flex justify-between text-grey items-center'>
                <div className='text-sm'>Python</div>
                <button className='py-1 inline-flex items-center gap-1'>
                    <DocumentDuplicateIcon className="h-3 w-3 text-grey" />
                </button>
            </div>
        </div>
        <SyntaxHighlighter 
            language="python"
            className='text-sm' 
            style={nord} 
            customStyle={{
                marginTop:'-1px',
                marginLeft:'10px', 
                marginRight:'10px', 
                padding:'40px',
                borderTopLeftRadius: '0px',
                borderTopRightRadius: '0px',
                borderBottomLeftRadius: '7px',
                borderBottomRightRadius: '7px',
                borderWidth: '1px',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                maxHeight: '500px',
                maxWidth: '80vw',
                overflow: 'auto',
                fontSize: '1.2rem',
            }}
            wrapLongLines={true}>
            {code_string}
        </SyntaxHighlighter>
    </div>
        
  );
};
