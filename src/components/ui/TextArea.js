export default function TextArea({ 
  label, 
  name, 
  value, 
  onChange, 
  required = false,
  placeholder,
  rows = 4,
  error,
  className = '',
  disabled = false,
  maxLength
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
        disabled={disabled}
        maxLength={maxLength}
        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 resize-none ${
          error 
            ? 'border-red-500 focus:border-red-600' 
            : 'border-gray-300 focus:border-honey'
        } focus:outline-none focus:ring-4 focus:ring-honey-100 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      />
      <div className="flex justify-between items-center">
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
        {maxLength && (
          <p className="text-xs text-charcoal-500 ml-auto">
            {value.length}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
}