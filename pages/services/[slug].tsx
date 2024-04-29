import styles from './slug.module.scss';
import cn from 'classnames';

import { IconExploreArrow } from '@/src/assets/IconExploreArrow';
import { IconChevronDown } from '@/src/assets/IconChevronDown';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import { XLink } from '@/src/components/XLink';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import { nextFetcher } from '@/src/helpers/fetcherHelper';
import parse from 'html-react-parser';
import Layouts from '@/src/layouts';
import { useState } from 'react';

interface IPropsDetail {
  short_description: string;
  category_id: number;
  highlight: boolean;
  spot_text: string;
  content: string;
  status: string;
  title: string;
  image: string;
  icon: string;
  slug: string;
}

interface IPropsFaqFilter {
  title: string;
  id: number;
}

interface IPropsFaq {
  filter_id: number;
  content: string;
  title: string;
  id: number;
}

interface IPropsHome {
  one_sub_title: string;
  one_link_text: string;
  one_title: string;
  one_text: string;
  one_link: string;
}

DetailPage.getInitialProps = async (context: any) => {
  const { slug } = context.query;

  const dataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + `/items/bs_services?filter[slug][_eq]=${encodeURIComponent(slug)}`}`
  );

  const data = dataFetch?.data[0];

  const faqFilterDataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_faq_filter'}`
  );

  const faqFilterData = faqFilterDataFetch?.data;

  const faqDataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_faq'}`
  );

  const faqData = faqDataFetch?.data;

  const homeSettingsFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_home_settings'}`
  );

  const homeData = homeSettingsFetch?.data[0];

  return { faqFilterData, homeData, faqData, data };
};

interface IProps {
  faqFilterData: IPropsFaqFilter[];
  faqData: IPropsFaq[];
  homeData: IPropsHome;
  data: IPropsDetail;
}
export default function DetailPage({
  faqFilterData,
  homeData,
  faqData,
  data
}: IProps) {
  const [faqFilter, setFaqFilter] = useState<number>(0);
  const [faqFilterId, setFaqFilterId] = useState<number>(faqFilterData[0]?.id);
  const [faqContent, setFaqContent] = useState<number>(0);

  return (
    <Layouts>
      <XHeader color="light" />
      <main>
        <XPageTitle
          bgImage={process.env.NEXT_PUBLIC_API_URL + '/assets/' + data?.image}
          marqueTitle={data?.title}
          title={data?.spot_text}
          bgColor={'transparent'}
          offerForm={true}
        />
        <section className={styles.wrapper}>
          <Container>
            <div className={styles.content}>{parse(data?.content)}</div>
          </Container>
        </section>

        <section className={styles.benefits}>
          <Container className={styles.content}>
            <div className={styles.title}>
              <span>{homeData?.one_sub_title}</span>
              <h1>{homeData?.one_title}</h1>
            </div>
            <div className={styles.describe}>
              <p>{homeData?.one_text}</p>
              <XLink href={homeData?.one_link}>
                {homeData?.one_link_text} <IconExploreArrow />
              </XLink>
            </div>
          </Container>
        </section>

        <section className={styles.faq}>
          <Container>
            <div className={styles.faq_wrapper}>
              <div className={styles.tab_menu}>
                <ul>
                  {faqFilterData?.map(
                    (item: IPropsFaqFilter, index: number) => (
                      <li
                        onClick={() => {
                          setFaqFilter(index);
                          setFaqFilterId(item?.id);
                        }}
                        className={cn(faqFilter === index && styles.active)}
                        key={index}>
                        {item?.title}{' '}
                        {faqFilter === index && (
                          <span>
                            <IconChevronDown height={20} width={20} />
                          </span>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className={styles.tab_content}>
                <div className={styles.items}>
                  {faqData
                    ?.filter((x) => x?.filter_id === faqFilterId)
                    .map((item: IPropsFaq, index: number) => (
                      <div
                        className={cn(
                          styles.item,
                          faqContent === index && styles.active
                        )}
                        onClick={() => {
                          setFaqContent(index);
                        }}
                        key={index}>
                        <div className={styles.header}>
                          <div className={styles.title}>{item?.title}</div>
                          <div className={styles.chevron}>
                            <IconChevronDown height={30} width={30} />
                          </div>
                        </div>
                        <div className={styles.content}>{item?.content}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <XFooter bgColor="white" />
    </Layouts>
  );
}
