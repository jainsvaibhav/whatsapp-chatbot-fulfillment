const { google } = require("googleapis");

module.exports = {
  readSheet(auth) {
    const sheets = google.sheets({ version: "v4", auth });
    sheets.spreadsheets.values.get(
      {
        spreadsheetId: "18_vSBsA0bObPnRJBlC11m1f6dg8hsMLh336B7xDUpKs",
        range: "Sheet1!A2:B",
      },
      (err, res) => {
        if (err) return console.log("The API returned an error: " + err);
        console.log(res.data.values);
        const rows = res.data.values;
        if (rows.length) {
          console.log("Name, Major:");
          // Print columns A and E, which correspond to indices 0 and 4.
          rows.map((row) => {
            //console.log(`${row[0]}, ${row[4]}`);
          });
        } else {
          console.log("No data found.");
        }
      }
    );
  },

  writeSheetHeader(auth, params) {
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = "18_vSBsA0bObPnRJBlC11m1f6dg8hsMLh336B7xDUpKs";
    const range = "Sheet1!A1:1";
    const valueInputOption = "RAW";

    let values = [
      [
        "Timestamp",
        "Test Type",
        "Contact No.",
        "Firstname",
        "Lastname",
        "Pincode",
        "Taluk",
        "District",
        "State",
        "Address",
        "Location",
        "Test Date",
        "Time of Day",
        "Timing start",
        "Timing end",
        "Prescription Image",
        "Aadhar Front image",
        "Aadhar Back image",
      ],
    ];
    const resource = {
      values,
    };
    sheets.spreadsheets.values.update(
      {
        spreadsheetId,
        range,
        valueInputOption,
        resource,
      },
      (err, result) => {
        if (err) {
          // Handle error
          console.log(err);
        } else {
          console.log("%d cells updated.", result.updatedCells);
        }
      }
    );
  },

  appendSheet(auth, params) {
    console.log(params);
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = "18_vSBsA0bObPnRJBlC11m1f6dg8hsMLh336B7xDUpKs";
    const range = "Sheet1";
    const valueInputOption = "USER_ENTERED";
    let values = [
      [
        new Date().toISOString(),
        params.test_type,
        params.user_id,
        params.firstname,
        params.lastname,
        params.pincode,
        params.taluk,
        params.district,
        params.state,
        params.address,
        params.location,
        params.test_date,
        params.timeofday,
        params.start,
        params.end,
        params.pres_img1,
        params.aadhar_front,
        params.aadhar_back,
      ],
    ];
    let resource = {
      values,
    };
    sheets.spreadsheets.values.append(
      {
        spreadsheetId,
        range,
        valueInputOption,
        resource,
      },
      (err, result) => {
        if (err) {
          // Handle error.
          console.log(err);
        } else {
          console.log(` cells appended.`);
        }
      }
    );
  },
};
