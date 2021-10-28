import { Breadcrumb, Button } from '@fluentui/react';
import React from 'react';
import Header from '../design/header';
import LayoutBase from '../design/layout/layout-base';
import Solutions from '../design/solutions';

const SolutionsPage: React.FC = () => {

  const [side, setSide] = React.useState('products')

  return (
    <LayoutBase
      header={
        <Header
          image="https://res.cloudinary.com/code-comunity/image/upload/v1633477093/site-gok/structure-flex_nnrsrr.png"
          bgSize="cover"
          title="Nossa estrutura é totalmente flexivel"
          description={
            <div style={{ marginTop: '70px', position: 'absolute' }}>
              <Button style={{ color: side === 'products' ? 'black' : 'white', border: 'none', background: side !== 'products' && 'none' }} text="Products" onClick={() => setSide('products')} />
              <Button style={{ color: side === 'cases' ? 'black' : 'white', border: 'none', background: side !== 'cases' && 'none' }} text="Cases" onClick={() => setSide('cases')} />
            </div>
          }
        />
      }
      content={<Solutions session={side} />}
    />
  )
}

export default SolutionsPage;