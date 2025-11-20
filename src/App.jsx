import { useState } from "react";

const App = () => {
  const [mortgageAmount, setMortgageAmount] =
    useState("");
  const [mortgageTerm, setMortgageTerm] =
    useState("");
  const [interestRate, setInterestRate] =
    useState("");
  const [mortgageType, setMortgageType] =
    useState("repayment");
  const [monthlyPayment, setMonthlyPayment] =
    useState(null);
  const [totalRepayment, setTotalRepayment] =
    useState(null);
  const [errors, setErrors] = useState({});
  const [hasCalculated, setHasCalculated] =
    useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (
      !mortgageAmount ||
      parseFloat(mortgageAmount) <= 0
    ) {
      newErrors.mortgageAmount =
        "This field is required";
    }
    if (
      !mortgageTerm ||
      parseFloat(mortgageTerm) <= 0
    ) {
      newErrors.mortgageTerm =
        "This field is required";
    }
    if (
      !interestRate ||
      parseFloat(interestRate) <= 0
    ) {
      newErrors.interestRate =
        "This field is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateResults = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const principal = parseFloat(mortgageAmount);
    const termYears = parseFloat(mortgageTerm);
    const annualRate = parseFloat(interestRate);

    // Convert annual interest rate to monthly and decimal
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = termYears * 12;

    if (mortgageType === "repayment") {
      // Standard mortgage formula: M = P[r(1+r)^n]/[(1+r)^n-1]
      const monthly =
        (principal *
          monthlyRate *
          Math.pow(
            1 + monthlyRate,
            numberOfPayments
          )) /
        (Math.pow(
          1 + monthlyRate,
          numberOfPayments
        ) -
          1);

      const total = monthly * numberOfPayments;

      setMonthlyPayment(monthly);
      setTotalRepayment(total);
    } else {
      // Interest only: just pay the interest each month
      const monthly = principal * monthlyRate;
      const total =
        monthly * numberOfPayments + principal;

      setMonthlyPayment(monthly);
      setTotalRepayment(total);
    }

    setHasCalculated(true);
  };

  const clearAll = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("repayment");
    setMonthlyPayment(null);
    setTotalRepayment(null);
    setErrors({});
    setHasCalculated(false);
  };

  const formatCurrency = (value) => {
    if (value === null || value === undefined)
      return "0.00";
    return new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center">
      {/* Changed container - removed min-w-md, added proper constraints */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white">
        {/* Left Side */}
        <div className="flex-1 bg-white p-6 md:p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-neutral-900">
              Mortgage Calculator
            </h1>
            <button
              type="button"
              onClick={clearAll}
              className="text-neutral-700 hover:text-neutral-900 underline text-sm"
            >
              Clear All
            </button>
          </div>

          <form
            onSubmit={calculateResults}
            className="space-y-6"
          >
            {/* Mortgage Amount */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="mortgageAmount"
                className="text-sm font-medium text-neutral-700"
              >
                Mortgage Amount
              </label>
              <div className="relative">
                <span
                  className={`absolute left-0 top-0 bottom-0 px-4 flex items-center font-bold text-neutral-700 rounded-l border ${
                    errors.mortgageAmount
                      ? "bg-red text-white border-red"
                      : "bg-neutral-100 border-neutral-500"
                  }`}
                >
                  £
                </span>
                <input
                  type="number"
                  id="mortgageAmount"
                  name="mortgageAmount"
                  value={mortgageAmount}
                  onChange={(e) => {
                    setMortgageAmount(
                      e.target.value
                    );
                    if (errors.mortgageAmount) {
                      setErrors({
                        ...errors,
                        mortgageAmount: null,
                      });
                    }
                  }}
                  className={`w-full pl-16 pr-4 py-3 border rounded font-bold focus:outline-none focus:border-lime ${
                    errors.mortgageAmount
                      ? "border-red"
                      : "border-neutral-500 hover:border-neutral-900"
                  }`}
                  placeholder="300000"
                />
              </div>
              {errors.mortgageAmount && (
                <p className="text-red text-sm">
                  {errors.mortgageAmount}
                </p>
              )}
            </div>

            {/* Mortgage Term and Interest Rate */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col space-y-2">
                <label
                  htmlFor="mortgageTerm"
                  className="text-sm font-medium text-neutral-700"
                >
                  Mortgage Term
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="mortgageTerm"
                    name="mortgageTerm"
                    value={mortgageTerm}
                    onChange={(e) => {
                      setMortgageTerm(
                        e.target.value
                      );
                      if (errors.mortgageTerm) {
                        setErrors({
                          ...errors,
                          mortgageTerm: null,
                        });
                      }
                    }}
                    className={`w-full pl-4 pr-16 py-3 border rounded font-bold focus:outline-none focus:border-lime ${
                      errors.mortgageTerm
                        ? "border-red"
                        : "border-neutral-500 hover:border-neutral-900"
                    }`}
                    placeholder="25"
                  />
                  <span
                    className={`absolute right-0 top-0 bottom-0 px-4 flex items-center font-bold text-neutral-700 rounded-r border ${
                      errors.mortgageTerm
                        ? "bg-red text-white border-red"
                        : "bg-neutral-100 border-neutral-500"
                    }`}
                  >
                    years
                  </span>
                </div>
                {errors.mortgageTerm && (
                  <p className="text-red text-sm">
                    {errors.mortgageTerm}
                  </p>
                )}
              </div>

              <div className="flex-1 flex flex-col space-y-2">
                <label
                  htmlFor="interestRate"
                  className="text-sm font-medium text-neutral-700"
                >
                  Interest Rate
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    id="interestRate"
                    name="interestRate"
                    value={interestRate}
                    onChange={(e) => {
                      setInterestRate(
                        e.target.value
                      );
                      if (errors.interestRate) {
                        setErrors({
                          ...errors,
                          interestRate: null,
                        });
                      }
                    }}
                    className={`w-full pl-4 pr-16 py-3 border rounded font-bold focus:outline-none focus:border-lime ${
                      errors.interestRate
                        ? "border-red"
                        : "border-neutral-500 hover:border-neutral-900"
                    }`}
                    placeholder="5.25"
                  />
                  <span
                    className={`absolute right-0 top-0 bottom-0 px-4 flex items-center font-bold text-neutral-700 rounded-r border ${
                      errors.interestRate
                        ? "bg-red text-white border-red"
                        : "bg-neutral-100 border-neutral-500"
                    }`}
                  >
                    %
                  </span>
                </div>
                {errors.interestRate && (
                  <p className="text-red text-sm">
                    {errors.interestRate}
                  </p>
                )}
              </div>
            </div>

            {/* Mortgage Type Radio Buttons */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-neutral-700">
                Mortgage Type
              </label>

              <div className="space-y-3">
                {/* Repayment Option */}
                <label
                  className={`flex items-center p-3 border rounded cursor-pointer transition-colors ${
                    mortgageType === "repayment"
                      ? "bg-lime/10 border-lime"
                      : "border-neutral-500 hover:border-lime"
                  }`}
                >
                  <input
                    type="radio"
                    name="mortgageType"
                    value="repayment"
                    checked={
                      mortgageType === "repayment"
                    }
                    onChange={(e) =>
                      setMortgageType(
                        e.target.value
                      )
                    }
                    className="w-4 h-4 accent-lime"
                  />
                  <span className="ml-3 font-bold text-neutral-900">
                    Repayment
                  </span>
                </label>

                {/* Interest Only Option */}
                <label
                  className={`flex items-center p-3 border rounded cursor-pointer transition-colors ${
                    mortgageType ===
                    "interestOnly"
                      ? "bg-lime/10 border-lime"
                      : "border-neutral-500 hover:border-lime"
                  }`}
                >
                  <input
                    type="radio"
                    name="mortgageType"
                    value="interestOnly"
                    checked={
                      mortgageType ===
                      "interestOnly"
                    }
                    onChange={(e) =>
                      setMortgageType(
                        e.target.value
                      )
                    }
                    className="w-4 h-4 accent-lime"
                  />
                  <span className="ml-3 font-bold text-neutral-900">
                    Interest Only
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-lime text-neutral-900 py-4 px-8 rounded-full font-bold hover:bg-lime/80 transition-colors flex items-center justify-center gap-3"
            >
              <img
                src="/assets/images/icon-calculator.svg"
                alt=""
                className="w-6 h-6"
              />
              Calculate Repayments
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center items-center bg-neutral-900 text-white p-8 md:p-10 rounded-b-lg md:rounded-r-lg md:rounded-bl-[80px]">
          {hasCalculated &&
          monthlyPayment !== null ? (
            <div className="w-full space-y-6">
              <h2 className="text-2xl font-bold">
                Your results
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Your results are shown below based
                on the information you provided.
                To adjust the results, edit the
                form and click "calculate
                repayments" again.
              </p>

              <div className="bg-black/25 rounded-lg p-6 md:p-8 border-t-4 border-lime mt-8">
                <div className="border-b border-neutral-300/25 pb-6 mb-6">
                  <p className="text-neutral-300 text-sm mb-3">
                    Your monthly repayments
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-lime">
                    £
                    {formatCurrency(
                      monthlyPayment
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-neutral-300 text-sm mb-3">
                    Total you'll repay over the
                    term
                  </p>
                  <p className="text-2xl font-bold text-white">
                    £
                    {formatCurrency(
                      totalRepayment
                    )}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <img
                src="/assets/images/illustration-empty.svg"
                alt="Calculator illustration"
                className="mb-4"
              />
              <h2 className="text-2xl font-bold text-white">
                Results shown here
              </h2>
              <p className="text-neutral-300 text-sm max-w-xs leading-relaxed">
                Complete the form and click
                "calculate repayments" to see what
                your monthly repayments would be.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
