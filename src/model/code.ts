import { atom } from 'recoil';

export interface CodeProps {
  code: string;
}

export const codeState = atom<CodeProps>({
  key: 'codeState',
  default: {
    code: `
    
.test {
  width: 100%;
  height: 50%;
  margin: 0 !important;
  background-color: transparent;
}
`,
  },
});
