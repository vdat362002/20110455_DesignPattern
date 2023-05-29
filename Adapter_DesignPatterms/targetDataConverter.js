class TargetDataConverter {
    convertData(data) {
      // Giả sử chúng ta có một hàm phức tạp để chuyển đổi dữ liệu thành định dạng mới
      return {
        Full_Name: `${data.firstName} ${data.lastName}`,
        Years_Old: data.age,
        Full_Address: `${data.address}, City`,
      };
    }
  }
  
  module.exports = TargetDataConverter;