export default function InputField({ label, type, value, onChange, placeholder, required = true }) {
  return (
    <div>
      <label className="block text-sm font-bold text-white mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-white-300 bg-[#1e1f1f]"
      />
    </div>
  );
}