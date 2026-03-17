"use client";

import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

type Msg = { id: string; role: "user" | "assistant"; text: string };

export function ChatModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "m1",
      role: "assistant",
      text: "Namaste! How can I help you today — retreats, yoga trainings, healing sessions, or booking?",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  const send = async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // placeholder response (replace with your real AI endpoint later)
    const botMsg: Msg = {
      id: crypto.randomUUID(),
      role: "assistant",
      text: "Thanks! AI integration is coming soon. For bookings, please use WhatsApp or Call.",
    };
    setMessages((prev) => [...prev, botMsg]);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2000]">
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/50"
        aria-label="Close chat"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="absolute bottom-4 right-4 w-[92vw] max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div>
            <div className="text-sm font-semibold text-slate-900">
              Chat with our AI
            </div>
            <div className="text-xs text-slate-500">
              Ask about programs, schedules, booking, pricing.
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[55vh] space-y-3 overflow-y-auto px-4 py-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-[#8B0000] text-white"
                    : "bg-slate-100 text-slate-800"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="border-t p-3">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              className="h-10 flex-1 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#8B0000]"
              placeholder="Type your message..."
            />
            <button
              onClick={send}
              className="h-10 rounded-xl bg-[#8B0000] px-4 text-sm font-semibold text-white hover:bg-[#6f0000]"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
