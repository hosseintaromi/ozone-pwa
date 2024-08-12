import JalaliCalendar from '@/components/share/calendar/JalaliCalendar';
import locale from '@/locale';
import { Container, Button, VARIANT_ENUM } from 'ozone-uikit';
import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

const CalenderDialog = ({
  show,
  setShow,
  setValue,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { common } = locale;
  const [val, setVal] = useState('');
  const submit = () => {
    setValue(val);
    setShow(false);
  };

  return (
    <BottomSheet
      open={show}
      onDismiss={() => setShow(false)}
      blocking={false}
      snapPoints={({ minHeight }) => [minHeight]}
      header
    >
      <JalaliCalendar setValue={setVal} />
      <Container className='mx-5 mb-8 mt-5'>
        <Button variant={VARIANT_ENUM.OUTLINED} onClick={submit} className='w-full  py-6'>
          {common.confirm}
        </Button>
      </Container>
    </BottomSheet>
  );
};

export default CalenderDialog;
