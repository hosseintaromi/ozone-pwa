import Receipt from '@/components/app/receipt/Receipt';
import { Suspense } from 'react';
const ReceiptPage = () => {
  return (
    <Suspense>
      <Receipt />
    </Suspense>
  );
};
export default ReceiptPage;
