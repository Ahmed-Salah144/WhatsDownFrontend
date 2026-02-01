interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/70"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-primaryBg rounded-lg shadow-xl max-w-md w-full mx-4 p-6 border border-secondaryBg">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-text">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-text/60 hover:text-text transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="text-text">{children}</div>
            </div>
        </div>
    );
}
