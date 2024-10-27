import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export const usersTable = base("Users");

export async function findUserByEmail(email) {
  const records = await usersTable.select({
    filterByFormula: `{email} = "${email}"`,
  }).firstPage();

  return records.length ? records[0].fields : null;
}
