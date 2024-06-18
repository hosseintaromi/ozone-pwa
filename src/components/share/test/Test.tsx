import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  function onClose() {
    setIsOpen(false);
  }

  function onOpen() {
    setIsOpen(true);
  }

  function onToggle() {
    setIsOpen(!isOpen);
  }

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
      <div className='DragHandleEdge'>
        <div className='DragHandle' />
      </div>

      <div className='Navbar'>
        <span className='Title'>Bottom sheet</span>
        <div className='ButtonGroup'>
          <span className='ButtonExpandCollapse' onClick={onToggle}>
            <span className='IconExpandCollapse'> {isOpen ? '􀅋' : '􀅊'}</span>
            <span className='LabelExpandCollapse'>{isOpen ? 'Collapse' : 'Expand'}</span>
          </span>
          <span className='CloseIcon' onClick={() => {}}>
            􀁡
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Test;
