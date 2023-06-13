import dynamic from 'next/dynamic';
import { useRecoilValue } from 'recoil';
import useCode from '@/hooks/useCode';
import { codeState, CodeProps } from '@/model/code';

const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace');
    await import('ace-builds/src-noconflict/mode-css');
    await import('ace-builds/src-noconflict/theme-monokai');
    return ace;
  },
  { ssr: false },
);

interface CodePresentationProps {
  codeProps: CodeProps;
  handleChange: (value: string) => void;
}

function CodePresentation({ ...props }: CodePresentationProps) {
  return (
    <div className='h-screen w-1/3'>
      <AceEditor
        mode='css'
        theme='monokai'
        name='css2tailwind'
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={props.codeProps.code}
        onChange={(e) => props.handleChange(e)}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: '100%', height: '100vh' }}
      />
    </div>
  );
}

export default function CodeContainer() {
  const code = useRecoilValue(codeState);
  const changeCode = useCode();

  const handleChange = (value: string) => {
    changeCode(value);
  };

  const data: CodePresentationProps = {
    codeProps: code,
    handleChange,
  };

  return <CodePresentation {...data} />;
}
