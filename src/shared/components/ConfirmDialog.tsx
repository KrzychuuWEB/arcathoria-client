import * as ReactDialog from "@radix-ui/react-dialog";
import { AlertTriangle, X } from "lucide-react";

type ConfirmDialogProps = {
    open: boolean;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: "danger" | "default";
    onConfirm: () => void;
    onCancel: () => void;
};

const ConfirmDialog = ({
    open,
    title = "Potwierdź działanie",
    description = "Czy na pewno chcesz kontynuować?",
    confirmText = "Potwierdź",
    cancelText = "Anuluj",
    variant = "default",
    onConfirm,
    onCancel,
}: ConfirmDialogProps) => {
    const confirmClasses =
        variant === "danger"
            ? "bg-rose-600/90 hover:bg-rose-600 text-white border border-rose-400/40"
            : "bg-[#6A0DAD]/70 hover:bg-[#6A0DAD] text-[#F2F2F2] border border-[#FFD700]/30";

    return (
        <ReactDialog.Root open={open}>
            <ReactDialog.Portal>
                <ReactDialog.Overlay
                    className="
          fixed inset-0 bg-black/60 backdrop-blur-sm
          data-[state=open]:animate-fadeIn z-40
        "
                />
                <ReactDialog.Content
                    className="
          fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[92vw] max-w-md rounded-2xl
          bg-[#1E1E2C]/90 text-[#F2F2F2] border border-[#6A0DAD]/40
          shadow-[0_0_30px_rgba(106,13,173,0.45)]
          p-5
          data-[state=open]:animate-scaleIn z-50
        "
                >
                    <div className="absolute z-50 -inset-[2px] rounded-2xl pointer-events-none opacity-60 blur-[10px] bg-gradient-to-tr from-[#6A0DAD]/25 via-transparent to-[#FFD700]/25" />

                    <div className="relative z-50 flex items-start gap-3">
                        <div className="mt-0.5">
                            <AlertTriangle
                                className={
                                    variant === "danger" ? "text-rose-400" : "text-[#FFD700]"
                                }
                            />
                        </div>
                        <div className="flex-1">
                            <ReactDialog.Title className="font-cinzel text-lg">
                                {title}
                            </ReactDialog.Title>
                            <ReactDialog.Description className="font-roboto text-sm text-[#D1C4E9] mt-1">
                                {description}
                            </ReactDialog.Description>
                        </div>

                        <ReactDialog.Close asChild>
                            <button
                                onClick={onCancel}
                                className="cursor-pointer inline-flex items-center justify-center w-8 h-8 rounded-full
                           bg-white/5 hover:bg-white/10 border border-white/10"
                                aria-label="Zamknij"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </ReactDialog.Close>
                    </div>

                    <div className="relative z-50 mt-5 flex justify-end gap-2">
                        <ReactDialog.Close asChild>
                            <button
                                onClick={onCancel}
                                className="cursor-pointer px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#F2F2F2]"
                            >
                                {cancelText}
                            </button>
                        </ReactDialog.Close>
                        <ReactDialog.Close asChild>
                            <button
                                onClick={onConfirm}
                                className={`cursor-pointer px-3 py-2 rounded-xl ${confirmClasses}`}
                            >
                                {confirmText}
                            </button>
                        </ReactDialog.Close>
                    </div>
                </ReactDialog.Content>
            </ReactDialog.Portal>
        </ReactDialog.Root>
    );
};

export default ConfirmDialog;
