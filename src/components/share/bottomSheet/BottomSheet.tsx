import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function BottomSheet({ isClosed, setIsClosed }) {
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  function onOpen() {
    setIsOpen(true);
  }

  function onToggle() {
    setIsOpen(!isOpen);
  }

  const prevIsOpen = usePrevious(isOpen);
  const controls = useAnimation();

  function onDragEnd(event, info) {
    const shouldClose = info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 45);
    if (shouldClose) {
      controls.start('hidden');
      onClose();
    } else {
      controls.start('visible');
      onOpen();
    }
  }

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start('hidden');
    } else if (!prevIsOpen && isOpen) {
      controls.start('visible');
    } else if (isClosed) {
      controls.start('closed');
    } else if (!isClosed) {
      controls.start('hidden');
    }
  }, [controls, isOpen, isClosed, prevIsOpen]);

  const handleDoubleClick = (e) => {
    switch (e.detail) {
      case 1:
        break;
      case 2:
        if (!prevIsOpen && isOpen) {
          controls.start('hidden');
          setIsOpen(false);
        } else if (prevIsOpen && !isOpen) {
          controls.start('visible');
          setIsOpen(true);
        }

        break;

      default:
        return;
    }
  };

  return (
    <motion.div
      drag='y'
      onDragEnd={onDragEnd}
      initial='hidden'
      animate={controls}
      transition={{
        type: 'spring',
        damping: 40,
        stiffness: 400,
      }}
      variants={{
        // hidden: { y: "calc(100% - 256px)" },
        // visible: { y: "10%" },
        visible: { y: 104 },
        hidden: { y: '70%' },
        closed: { y: '100%' },
      }}
      dragConstraints={{ top: 0 }}
      dragElastic={0.2}
      style={{
        display: 'inline-block',
        backgroundColor: 'white',
        width: 320,
        height: 768,
        border: '1px solid #E0E0E0',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)',
        borderRadius: '13px 13px 0px 0px',
        overflow: 'hidden',
        zIndex: 1000,
      }}
    >
      <div className='DragHandleEdge' onClick={handleDoubleClick}>
        <div className='DragHandle' />
      </div>
      <div className='Navbar'>
        <span className='Title'>Bottom sheet</span>
        <div className='ButtonGroup'>
          <span className='ButtonExpandCollapse' onClick={onToggle}>
            <span className='IconExpandCollapse'> {isOpen ? '􀅋' : '􀅊'}</span>
            <span className='LabelExpandCollapse'>{isOpen ? 'Collapse' : 'Expand'}</span>
          </span>
          <span className='CloseIcon' onClick={() => setIsClosed(true)}>
            􀁡
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function usePrevious(value) {
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
}

export default BottomSheet;
