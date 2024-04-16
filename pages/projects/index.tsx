import styles from './index.module.scss';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import { XLink } from '@/src/components/XLink';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import { ProjectsType, Projects } from '@/src/config/projects.config';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Layouts from '@/src/layouts';

export default function ContactPage() {
  return (
    <Layouts>
      <XHeader />
      <main>
        <XPageTitle
          title="We combine our passion for design and code."
          subTitle="Buraya kısa bir bilgilendirme gelecek"
          marqueTitle="Projeler"
          bgColor="transparent"
        />
        <section className={styles.projects}>
          <Container className={styles.content}>
            <div className={styles.filter}>
              <span>Filter By:</span>
              <div className={styles.options}>
                <span>All</span>
                <span>Branding</span>
                <span>Mobile App</span>
                <span>Creative</span>
              </div>
            </div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry>
                {Projects.map((project: ProjectsType, index: number) => (
                  <XLink href={`projects/${project.title}`} key={index}>
                    <div className={styles.card}>
                      <div
                        style={{ height: index % 2 === 0 ? '340px' : '420px' }}
                        className={styles.card_content}>
                        <XImage src={project.image} alt={project.title} fill />
                        <div className={styles.card_text}>
                          <label>{project.label}</label>
                          <h1>{project.title}</h1>
                        </div>
                      </div>
                    </div>
                  </XLink>
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
