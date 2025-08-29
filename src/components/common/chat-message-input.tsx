export default function ChatMessageInput() {
  return (
    <div className="p-2 border-t touch:p-2.5 w-full flex items-center gap-2 bg-gray-50 dark:bg-gray-900">
      {/* <textarea
        className="w-full resize-none rounded-md border border-gray-300 bg-white p-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 sm:text-sm"
        rows={1}
        placeholder="Type your message..."
      ></textarea> */}
      <div className="max-w-70">
        <div contentEditable="true" className="w-full"></div>
      </div>
    </div>
  );
}
