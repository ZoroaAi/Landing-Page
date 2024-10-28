import Airtable from "airtable";

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY });
const base = airtable.base(process.env.AIRTABLE_BASE_ID);

export const getUserByEmail = async (email) => {
    try {
        console.log("Getting User by email: ", email);
        const records = await base('Clients').select({
            filterByFormula: `{Email} = '${email}'`,
            maxRecords: 1,
        }).firstPage();
      
      return records.length ? records[0].fields : null;
    } catch (error) {
        console.error(`Error fetching user by email: ${email}`, error);
        throw error;
    }
};

export const createUser = async ({ email, password, role}) => {
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const createdRecords = await base('Clients').create([
          {
            fields: {
              Email: email,
              Password: passwordHash,
              Role: role || 'user'
            }
          }
        ]);
        console.log(`User created successfully: ${email}`);
        return createdRecords.length ? createdRecords[0].fields : null;
      } catch (error) {
        console.error(`Error creating user: ${email}`, error);
        throw error;
      }
}

export const getAdminByEmail = async (email) => {
    try {
        console.log("Getting Admin by email: ", email);
        const records = await base('Admins').select({
            filterByFormula: `{Email} = '${email}'`,
            maxRecords: 1,
        }).firstPage();
        
        if (records.length) {
            console.info("User found", { email });
        } else {
            console.warn("User not found", { email });
        }

        return records.length ? records[0].fields : null;
    } catch (error) {
        console.error(`Error fetching admin by email: ${email}`, error);
        throw error;
    }
}

export const createAdmin = async ({ email, password }) => {
    const passwordHash = await bcrypt.hash(password,10)
    const createdRecord = await base('Admins').create([
        {
            fields: {
                Email: email,
                Password: passwordHash
            }
        }
    ]);
    return createdRecord.length? createdRecord[0].fields : null;
}