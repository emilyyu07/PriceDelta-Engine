/**
 * Format a number as USD currency
 * @param amount - The numeric amount to format
 * @returns Formatted currency string (e.g., "$19.99")
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

/**
 * Format a date string into a readable format
 * @param dateString - ISO date string
 * @returns Formatted date (e.g., "Jan 15, 2024")
 */
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

/**
 * Format a date string into relative time
 * @param dateString - ISO date string
 * @returns Relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;

  return formatDate(dateString);
};

/**
 * Calculate percentage change between two prices
 * @param oldPrice - Original price
 * @param newPrice - New price
 * @returns Percentage change (positive = increase, negative = decrease)
 */
export const calculatePriceChange = (
  oldPrice: number,
  newPrice: number,
): number => {
  return ((newPrice - oldPrice) / oldPrice) * 100;
};
