import SendButtonIcon from "../icons/send-button";

export default function ChatMessageInput() {
  return (
    <div
      className="
        [--thread-content-max-width:32rem] 
        sm:[--thread-content-max-width:40rem] 
        lg:[--thread-content-max-width:48rem] 
        mx-auto 
        max-w-[var(--thread-content-max-width)] 
        flex-1
      "
    >
      <div className="p-2.5 ps-5 w-full flex items-end gap-2 dark:bg-[#303030] rounded-4xl mb-6">
        <div className="w-full">
          <div contentEditable="true" className="w-full h-full outline-none"></div>
        </div>
        <div>
          <button className="text-black font-semibold p-2 rounded-full pointer flex items-center justify-center rounded-full bg-[var(--text-quaternary)]">
            <SendButtonIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
