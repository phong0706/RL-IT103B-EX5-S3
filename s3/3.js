const rawRecord = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

const parts = rawRecord.split("-");
const rawDoctor = parts[0];
const rawDepartment = parts[1];
const appointmentTime = parts[2];
const rawRoom = parts[3];

const cleanDoctorName = rawDoctor.replace(/^bs\./i, "").replaceAll("_", " ");
const nameWords = cleanDoctorName.toLowerCase().split(" ");
let formattedDoctorName = "";
for (let i = 0; i < nameWords.length; i++) {
  if (nameWords[i].length > 0) {
    formattedDoctorName += nameWords[i][0].toUpperCase() + nameWords[i].slice(1) + " ";
  }
}
formattedDoctorName = formattedDoctorName.trim();

const cleanDepartment = rawDepartment.toLowerCase().replaceAll("_", " ");
const deptWords = cleanDepartment.split(" ");
let formattedDepartment = "";
for (let i = 0; i < deptWords.length; i++) {
  if (deptWords[i].length > 0) {
    formattedDepartment += deptWords[i][0].toUpperCase() + deptWords[i].slice(1) + " ";
  }
}
formattedDepartment = formattedDepartment.trim();

const formattedRoom = rawRoom.replace("PHONG_", "Phòng ");

console.log(`========================================`);
console.log(`      BẢNG PHÂN CÔNG CA KHÁM Y TẾ      `);
console.log(`========================================`);
console.log(`- Bác sĩ phụ trách : ${formattedDoctorName}`);
console.log(`- Chuyên khoa      : ${formattedDepartment}`);
console.log(`- Giờ tiếp đón     : ${appointmentTime}`);
console.log(`- Địa điểm khám    : ${formattedRoom}`);
console.log(`========================================`);