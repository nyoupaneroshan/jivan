/**
 * Generate upcoming training batch dates dynamically
 *
 * @param {number} intervalMonths - Gap between batches (default: 3 months)
 * @param {number} totalBatches - How many upcoming batches to generate
 * @param {number} batchDay - Day of the month the batch starts
 * @returns {Array<{date: string}>}
 */

const today = new Date(
  new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" })
);


export function generateUpcomingBatches({
  intervalMonths = 3,
  totalBatches = 3,
  batchDay = 1,
} = {}) {
  const today = new Date();
  const batches = [];

  // Calculate next valid batch month
  let startMonth =
    today.getMonth() + intervalMonths - (today.getMonth() % intervalMonths);

  let year = today.getFullYear();

  for (let i = 0; i < totalBatches; i++) {
    if (startMonth > 11) {
      startMonth -= 12;
      year += 1;
    }

    const batchDate = new Date(year, startMonth, batchDay);

    batches.push({
      date: batchDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });

    startMonth += intervalMonths;
  }

  return batches;
}
