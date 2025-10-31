export default function Input({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  required = false,
  placeholder,
  error,
  className = ''
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
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
          error 
            ? 'border-red-500 focus:border-red-600' 
            : 'border-gray-300 focus:border-honey'
        } focus:outline-none focus:ring-4 focus:ring-honey-100 ${className}`}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export function Select({ 
  label, 
  name, 
  value, 
  onChange, 
  options,
  required = false,
  error,
  className = ''
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
        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
          error 
            ? 'border-red-500 focus:border-red-600' 
            : 'border-gray-300 focus:border-honey'
        } focus:outline-none focus:ring-4 focus:ring-honey-100 ${className}`}
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

export function TextArea({ 
  label, 
  name, 
  value, 
  onChange, 
  required = false,
  placeholder,
  rows = 4,
  error,
  className = ''
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
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 resize-none ${
          error 
            ? 'border-red-500 focus:border-red-600' 
            : 'border-gray-300 focus:border-honey'
        } focus:outline-none focus:ring-4 focus:ring-honey-100 ${className}`}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}