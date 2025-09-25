"use client";

import { useEffect, useRef, useState } from "react";
import SendButtonIcon from "../icons/send-button";

export default function ChatMessageInput() {
  const divRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const el = divRef.current;
    if (!el) return;

    const handleInput = () => {
      const text = el.innerText.trim();
      setText(text);
      if (el.innerText.trim() === "" || el.innerHTML.trim() === "<br>") {
        el.innerHTML = "";
      }
    };

    el.addEventListener("input", handleInput);
    return () => el.removeEventListener("input", handleInput);
  }, []);

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
      <div className="p-2.5 ps-5 w-full flex items-end gap-2 dark:bg-[#303030] shadow-short rounded-4xl mb-6">
        <div className="w-full h-[-webkit-fill-available] flex items-center">
          <div contentEditable="true" ref={divRef} className="w-full outline-none relative" data-placeholder="Ask anything"></div>
        </div>
        <div>
          <button
            className="text-black font-semibold p-2 rounded-full cursor-pointer flex items-center justify-center rounded-full bg-[var(--text-primary)] transition disabled:bg-[var(--text-quaternary)] disabled:cursor-default"
            disabled={!text.trim()}
          >
            <SendButtonIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
