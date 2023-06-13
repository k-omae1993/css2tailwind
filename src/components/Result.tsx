import { CssToTailwindTranslator, ResultCode } from 'css-to-tailwind-translator';
import { useRecoilValue } from 'recoil';
import { codeState, CodeProps } from '@/model/code';

interface ResultPresentationProps {
  code: 'SyntaxError' | 'OK';
  conversionResult: ResultCode[];
}

function ResultPresentation({ ...props }: ResultPresentationProps) {
  return (
    <div className='w-1/3 bg-gray-100 p-4'>
      <h3 className='text-2xl text-sky-600'>CSS to TailwindCSS</h3>
      {props.code === 'SyntaxError' ? (
        <div className='text-red-500'>Syntax Error</div>
      ) : (
        <div className='text-ellipsis py-3  pt-8 font-bold'>
          {props.conversionResult.map((result, index) => {
            return (
              <div key={index} className='mb-8'>
                <h5 className='text-lg font-semibold text-green-600'>{result.selectorName}</h5>
                <p className='mt-2'>
                  <code className='rounded bg-gray-300 px-2 py-1 font-normal'>
                    {result.resultVal}
                  </code>
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ResultContainer() {
  const code = useRecoilValue(codeState);
  const conversionResult = CssToTailwindTranslator(code.code);
  console.log(conversionResult);
  const data: ResultPresentationProps = {
    code: conversionResult.code,
    conversionResult: conversionResult.data,
  };

  return <ResultPresentation {...data} />;
}
