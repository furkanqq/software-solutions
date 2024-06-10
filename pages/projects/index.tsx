import styles from './index.module.scss';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { nextFetcher } from '@/src/helpers/fetcherHelper';
import Layouts from '@/src/layouts';
import { useState } from 'react';

interface IPropsData {
  image: undefined | string;
  spot_text: string;
  title: string;
}

interface IPropsProjects {
  status: 'published' | 'archived' | 'draft';
  highlight_image: string;
  sort: number | null;
  highlight: boolean;
  spot_text: string;
  filter_id: number;
  image: string;
  title: string;
  slug: string;
  id: number;
}

interface IPropsProjectFilter {
  title: string;
  id: number;
}

ProjectPage.getInitialProps = async () => {
  const dataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_project_area'}`
  );

  const data = dataFetch?.data[0];

  const filterDataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_project_filter'}`
  );

  const filterData = filterDataFetch?.data;

  const projectsDataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_projects'}`
  );

  const projectsData = projectsDataFetch?.data;

  return { projectsData, filterData, data };
};

interface IProps {
  filterData: IPropsProjectFilter[];
  projectsData: IPropsProjects[];
  data: IPropsData;
}
export default function ProjectPage({
  projectsData,
  filterData,
  data
}: IProps) {
  const [filter, setFilter] = useState<number>(0);
  return (
    <Layouts>
      <XHeader color="light" />
      <main>
        <XPageTitle
          bgImage={process.env.NEXT_PUBLIC_API_URL + '/assets/' + data?.image}
          marqueTitle={data?.title}
          title={data?.spot_text}
          bgColor="white"
        />
        <section className={styles.projects}>
          <Container className={styles.content}>
            <div className={styles.filter}>
              <div className={styles.options}>
                <span
                  onClick={() => {
                    setFilter(0);
                  }}>
                  Tümü
                </span>
                {filterData?.map((item: IPropsProjectFilter, index: number) => (
                  <span
                    onClick={() => {
                      setFilter(item?.id);
                    }}
                    key={index}>
                    {item?.title}
                  </span>
                ))}
              </div>
            </div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry>
                {projectsData
                  ?.filter((x) => filter === 0 || x?.filter_id === filter)
                  .map((item: IPropsProjects, index: number) => (
                    <a href={'projeler/' + item.slug} key={index}>
                      <div className={styles.card}>
                        <div
                          style={{
                            height: index % 2 === 0 ? '340px' : '420px'
                          }}
                          className={styles.card_content}>
                          <XImage
                            src={
                              process.env.NEXT_PUBLIC_API_URL +
                              '/assets/' +
                              item?.image
                            }
                            alt={item.title}
                            fill
                          />
                          <div className={styles.card_text}>
                            <label>{item.spot_text}</label>
                            <h1>{item.title}</h1>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
              </Masonry>
            </ResponsiveMasonry>
          </Container>
        </section>
      </main>
      <XFooter bgColor="transparent" />
    </Layouts>
  );
}
