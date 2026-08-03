"use client";

import { useState } from "react";

interface ProfileTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  const tabs = [
    { id: "muro", label: "Muro", icon: "📱" },
    { id: "info", label: "Información", icon: "ℹ️" },
    { id: "resenas", label: "Reseñas (12)", icon: "👍" },
    { id: "chat", label: "Chat VIP", icon: "💬" },
  ];

  return (
    <div className="flex overflow-x-auto no-scrollbar border-b border-brand-border mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors ${
            activeTab === tab.id
              ? "text-brand-gold border-b-2 border-brand-gold bg-brand-gold/10"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <span>{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}
