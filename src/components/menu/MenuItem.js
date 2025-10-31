export default function MenuItem({ item }) {
  return (
    <div className="flex justify-between items-start py-4 border-b border-gray-200 last:border-0 group hover:bg-warm-gray/30 px-4 -mx-4 rounded-lg transition-colors duration-200">
      <div className="flex-1 pr-4">
        <h4 className="font-semibold text-charcoal-800 mb-1 group-hover:text-honey transition-colors">
          {item.name}
        </h4>
        {item.description && (
          <p className="text-sm text-charcoal-600 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
      <div className="flex-shrink-0">
        <span className="text-lg font-bold text-honey">
          Ksh.{item.price}
        </span>
      </div>
    </div>
  );
}