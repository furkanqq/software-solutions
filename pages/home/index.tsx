import Container from '@/src/components/XContainer';
import XFooter from '@/src/composite/XFooter';

import Layouts from '@/src/layouts';

export default function HomePage() {
  return (
    <Layouts>
      <main>
        <Container>
          <div style={{ height: '600px' }}></div>
        </Container>
      </main>
      <XFooter />
    </Layouts>
  );
}
