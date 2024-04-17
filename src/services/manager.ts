import { aboutLoaderAtom, aboutAtom } from '../stores';
import { IAboutResponse } from '@/src/services/type';
import { XApiUrl } from '@/src/services';
import { XStore } from '@/src/provider';

export namespace XServices {
  export const About = async () => {
    XStore.set(aboutAtom, undefined);
    XStore.set(aboutLoaderAtom, true);
    await XApiUrl.AboutPageData()
      .then((res) => {
        const resData: IAboutResponse = res?.data;
        XStore.set(aboutAtom, resData?.data);
      })
      .catch(() => {
        XStore.set(aboutAtom, undefined);
      })
      .finally(() => {
        XStore.set(aboutLoaderAtom, false);
      });
  };
}
