import { Container } from 'ozone-uikit';
import ReceiptCard from '@/components/app/receipt/ReceiptCard';
// import { useGetBankReceipt } from '@/services/hooks';

const Receipt = () => {
  // const { data } = useGetBankReceipt(searchParams.get('token'));

  return (
    <Container
      center
      className='relative mt-24 h-dvh w-full flex-col justify-between overflow-y-auto rounded-b-2xl rounded-t-2xl bg-neutral-900 px-5'
    >
      <ReceiptCard data={[]} />
    </Container>
  );
};

export default Receipt;
