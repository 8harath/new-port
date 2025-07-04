import React from 'react';
import ChatOverlay from '../ChatOverlay';

export default function ChatSection({ setActiveSection }: { setActiveSection?: (section: string) => void }) {
  return (
    <section id="chat" className="min-h-[60vh] flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl font-bold mb-6">Ask Bharath's Portfolio Assistant</h2>
      <div className="w-full max-w-md">
        <ChatOverlay open={true} onClose={() => {}} inline={true} />
      </div>
    </section>
  );
} 