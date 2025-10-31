import MenuItem from './MenuItem';

export default function MenuCategory({ category }) {
  return (
    <div className="mb-12 last:mb-0">
      <div className="bg-honey-50 rounded-xl p-4 mb-6">
        <h3 className="text-2xl font-display font-bold text-honey-700">
          {category.name}
        </h3>
      </div>
      <div className="space-y-2">
        {category.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}