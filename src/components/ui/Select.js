export default function Select({ 
  label, 
  name, 
  value, 
  onChange, 
  options,
  required = false,
  error,
  className = '',
  disabled = false
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={name}
          className="block text-sm font-semibold text-charcoal-800"
        >
          {label} {required && <span className="text-honey">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
          error 
            ? 'border-red-500 focus:border-red-600' 
            : 'border-gray-300 focus:border-honey'
        } focus:outline-none focus:ring-4 focus:ring-honey-100 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}