export const formatCurrency = (value: number): string => {
  return `$${value.toLocaleString()}`;
};

export const formatCurrencyK = (value: number): string => {
  return `$${(value / 1000).toFixed(0)}k`;
};

export const formatCurrencyM = (value: number): string => {
  return `$${(value / 1000000).toFixed(1)}M`;
};

export const formatPercentage = (value: number): string => {
  return `${value}%`;
};

export const formatPercentageWithSign = (value: number): string => {
  return `${value >= 0 ? "+" : ""}${value}%`;
};

export const createRevenueTooltipFormatter = () => {
  return (value: number, name: string): [string, string] => [
    formatCurrency(value),
    name === "currentYear" ? "Current Year" : "Previous Year",
  ];
};

export const createRevenueYAxisFormatter = () => {
  return (value: number): string => formatCurrencyK(value);
};

export const createCustomerTooltipFormatter = () => {
  return (value: number, name: string): [string, string] => [
    value.toLocaleString(),
    name === "newCustomers" ? "New Customers" : "Returning Customers",
  ];
};

export const createSalesTooltipFormatter = () => {
  return (value: number, name: string): [string, string] => [
    formatCurrency(value),
    name,
  ];
};

export const createTooltipFormatter = (
  valueFormatter: (value: number) => string
) => {
  return (value: number, name: string): [string, string] => [
    valueFormatter(value),
    name,
  ];
};

export const createYAxisFormatter = (
  valueFormatter: (value: number) => string
) => {
  return (value: number): string => valueFormatter(value);
};
