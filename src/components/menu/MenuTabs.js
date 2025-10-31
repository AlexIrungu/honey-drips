'use client';

export default function MenuTabs({ activeTab, onTabChange, tabs }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-honey text-white shadow-medium scale-105'
              : 'bg-white text-charcoal-700 hover:bg-warm-gray hover:shadow-soft'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}