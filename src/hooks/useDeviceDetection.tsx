import { useEffect, useState } from 'react';

import { isIOS } from '@/lib/helper';

const useDeviceDetection = () => {
  const [deviceType, setDeviceType] = useState(false);

  useEffect(() => {
    const detectedDevice = isIOS();
    setDeviceType(detectedDevice);
  }, []);

  return deviceType;
};

export default useDeviceDetection;
