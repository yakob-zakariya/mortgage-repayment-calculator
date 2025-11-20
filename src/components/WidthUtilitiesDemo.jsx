// WidthUtilitiesDemo.jsx
import React from "react";

const WidthUtilitiesDemo = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Understanding Tailwind CSS Width
          Utilities
        </h1>
        <p className="text-center text-gray-600 mb-8">
          A visual guide to min-w-* and max-w-*
          utilities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* min-width explanation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              min-w-* (Minimum Width)
            </h2>
            <p className="text-gray-600 mb-4">
              Sets a{" "}
              <span className="font-bold">
                minimum width
              </span>{" "}
              for an element. The element can grow
              larger but won't shrink below this
              value.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  min-w-md (28rem / 448px)
                </p>
                <div className="h-12 bg-blue-100 border-2 border-blue-400 min-w-md flex items-center justify-center">
                  <span className="text-sm">
                    This box won't shrink below
                    448px
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  min-w-lg (32rem / 512px)
                </p>
                <div className="h-12 bg-green-100 border-2 border-green-400 min-w-lg flex items-center justify-center">
                  <span className="text-sm">
                    This box won't shrink below
                    512px
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  min-w-xl (36rem / 576px)
                </p>
                <div className="h-12 bg-purple-100 border-2 border-purple-400 min-w-xl flex items-center justify-center">
                  <span className="text-sm">
                    This box won't shrink below
                    576px
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* max-width explanation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-red-700 mb-4">
              max-w-* (Maximum Width)
            </h2>
            <p className="text-gray-600 mb-4">
              Sets a{" "}
              <span className="font-bold">
                maximum width
              </span>{" "}
              for an element. The element can
              shrink smaller but won't grow beyond
              this value.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  max-w-md (28rem / 448px)
                </p>
                <div className="h-12 bg-red-100 border-2 border-red-400 max-w-md flex items-center justify-center">
                  <span className="text-sm">
                    This box won't grow beyond
                    448px
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  max-w-lg (32rem / 512px)
                </p>
                <div className="h-12 bg-yellow-100 border-2 border-yellow-400 max-w-lg flex items-center justify-center">
                  <span className="text-sm">
                    This box won't grow beyond
                    512px
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  max-w-xl (36rem / 576px)
                </p>
                <div className="h-12 bg-pink-100 border-2 border-pink-400 max-w-xl flex items-center justify-center">
                  <span className="text-sm">
                    This box won't grow beyond
                    576px
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical examples */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Practical Examples
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                1. Responsive Container with max-w
              </h3>
              <div className="bg-gray-200 p-4">
                <div className="max-w-md mx-auto bg-blue-200 p-4 rounded">
                  <p className="text-center">
                    This container centers itself
                    and won't exceed 448px width
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                2. Button with min-w
              </h3>
              <div className="bg-gray-200 p-4 flex flex-wrap gap-2">
                <button className="min-w-md bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Button with min-w-md
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Normal button
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                The first button maintains a
                minimum width of 448px
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                3. Combining min-w and max-w
              </h3>
              <div className="bg-gray-200 p-4">
                <div className="min-w-md max-w-xl bg-green-200 p-4 rounded mx-auto">
                  <p className="text-center">
                    This container is between
                    448px and 576px wide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Size reference table */}
        <SizeReferenceTable />

        {/* Key takeaways */}
        <KeyTakeaways />
      </div>
    </div>
  );
};

// Separate component for the size reference table
const SizeReferenceTable = () => {
  const sizes = [
    {
      size: "sm",
      minClass: "min-w-sm",
      maxClass: "max-w-sm",
      value: "24rem (384px)",
    },
    {
      size: "md",
      minClass: "min-w-md",
      maxClass: "max-w-md",
      value: "28rem (448px)",
    },
    {
      size: "lg",
      minClass: "min-w-lg",
      maxClass: "max-w-lg",
      value: "32rem (512px)",
    },
    {
      size: "xl",
      minClass: "min-w-xl",
      maxClass: "max-w-xl",
      value: "36rem (576px)",
    },
    {
      size: "2xl",
      minClass: "min-w-2xl",
      maxClass: "max-w-2xl",
      value: "42rem (672px)",
    },
  ];

  return (
    <div className="mt-12 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Tailwind Width Size Reference
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">
                Size
              </th>
              <th className="px-4 py-2 text-left">
                min-w-*
              </th>
              <th className="px-4 py-2 text-left">
                max-w-*
              </th>
              <th className="px-4 py-2 text-left">
                Width Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sizes.map((item) => (
              <tr
                key={item.size}
                className={
                  item.size === "md"
                    ? "bg-blue-50"
                    : ""
                }
              >
                <td
                  className={`px-4 py-2 ${
                    item.size === "md"
                      ? "font-medium"
                      : ""
                  }`}
                >
                  {item.size}
                </td>
                <td
                  className={`px-4 py-2 ${
                    item.size === "md"
                      ? "font-medium"
                      : ""
                  }`}
                >
                  {item.minClass}
                </td>
                <td
                  className={`px-4 py-2 ${
                    item.size === "md"
                      ? "font-medium"
                      : ""
                  }`}
                >
                  {item.maxClass}
                </td>
                <td
                  className={`px-4 py-2 ${
                    item.size === "md"
                      ? "font-medium"
                      : ""
                  }`}
                >
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Separate component for key takeaways
const KeyTakeaways = () => {
  const takeaways = [
    "min-w-* sets a minimum width - elements won't get smaller than this",
    "max-w-* sets a maximum width - elements won't get larger than this",
    "Both are useful for responsive design to control element sizing",
    "Common use: max-w-md mx-auto for centered containers",
    "Tailwind uses rem units (1rem = 16px by default)",
  ];

  return (
    <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-yellow-800 mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-yellow-700">
        {takeaways.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WidthUtilitiesDemo;
