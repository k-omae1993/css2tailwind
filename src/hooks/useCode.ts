import { useSetRecoilState } from 'recoil';
import { codeState } from '@/model/code';

export default function useCode() {
  const setCode = useSetRecoilState(codeState);

  const changeCode = (code: string) => {
    setCode({ code });
  };

  return changeCode;
}
