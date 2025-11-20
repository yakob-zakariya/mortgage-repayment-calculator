import { useState } from "react";

const LabeledToggle = ({
  label,
  description,
  defaultEnabled = false,
  onChange,
}) => {
  const [enabled, setEnabled] = useState(
    defaultEnabled
  );

  const handleToggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    onChange?.(newState);
  };

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">
          {label}
        </span>
        {description && (
          <span className="text-sm text-gray-500">
            {description}
          </span>
        )}
      </div>
      <button
        type="button"
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          enabled ? "bg-blue-600" : "bg-gray-200"
        }`}
        onClick={handleToggle}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            enabled
              ? "translate-x-5"
              : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default LabeledToggle;
