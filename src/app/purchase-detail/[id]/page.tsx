import PurchaseDetail from '@/components/app/purchaseDetail/PurchaseDetail';
import Container from '@/components/share/container';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
  return (
    <Container className='px-5 '>
      <PurchaseDetail params={params.id} />
    </Container>
  );
};

export default page;
