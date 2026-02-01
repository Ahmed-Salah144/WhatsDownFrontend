'use client';

import { useState } from 'react';
import IconButton from './IconButton';
import Modal from './Modal';

interface ModalIconProps {
    icon: React.ReactNode;
    modalTitle: string;
    children: React.ReactNode;
}

export default function ModalIcon({ icon, modalTitle, children }: ModalIconProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <IconButton icon={icon} onClick={() => setIsOpen(true)} />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={modalTitle}>
                {children}
            </Modal>
        </>
    );
}
