export class UserData {
  constructor({ name, email,password, contactno, studentID,token }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.contactno = contactno;
    this.studentID = studentID ? new StudentID(studentID) : null;
    this.token = token;

  }

  static fromJson(json) {
    return new UserData({
      name: json.name,
      email: json.email,
      password: json.password,
      contactno: json.contactno,
      studentID: json.studentID,
      token: json.token,

    });
  }

  toJson() {
    return {
      name: this.name,
      email: this.email,
      password: this.password,
      contactno: this.contactno,
      studentID: this.studentID ? this.studentID.toJson() : null,
      token: this.token,

    };
  }
}

export class StudentID {
  constructor({ _id, name, email, contactno }) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.contactno = contactno;
  }

  static fromJson(json) {
    return new StudentID({
      _id: json._id,
      name: json.name,
      email: json.email,
      contactno: json.contactno,
    });
  }

  toJson() {
    return {
      _id: this._id,
      name: this.name,
      email: this.email,
      contactno: this.contactno,
    };
  }
}

export class ResetPass {
  constructor({ old_password,new_password }) {
    this.old_password = old_password;
    this.new_password = new_password;
  
  }

  static fromJson(json) {
    return new ResetPass({
      old_password: json.old_password,
      new_password: json.new_password,
    });
  }

  toJson() {
    return {
      old_password: this.old_password,
      new_password: this.new_password,
    };
  }
}
export class AddAdmin {
  constructor({email, password, name}){
    this.email = email;
    this.password = password;
    this.name = name;
  }
  static fromJson(json) {
    return new AddAdmin({
      email: json.email,
      password: json.password,
      name: json.name,
      
    });
  }

  toJson() {
    return {
      email: this.email,
      password: this.password,
      name: this.name,
    };
  }
}

export class ChangeUsernameData {
  constructor({name}) {
    this.name = name;
  }

  static fromJson(json) {
    return new ChangeUsernameData({
      name: json.name,
    });
  }

  toJson() {
    return {
      name: this.name,
    };
  }
}
export class BaseResponseforReset {
  constructor({ success, data, message }) {
    this.success = success;
    this.data = data ? new ResetPass(data) : null;
    this.message = message;
  }

  static fromJson(json) {
    return new BaseResponse({
      success: json.success,
      data: json.data ? ResetPass.fromJson(json.data) : null,
      message: json.message,
    });
  }

  toJson() {
    return {
      success: this.success,
      data: this.data ? this.data.toJson() : null,
      message: this.message,
    };
  }
}


export class BaseResponse {
  constructor({ success, data, message }) {
    this.success = success;
    this.data = data ? new UserData(data) : null;
    this.message = message;
  }

  static fromJson(json) {
    return new BaseResponse({
      success: json.success,
      data: json.data ? UserData.fromJson(json.data) : null,
      message: json.message,
    });
  }

  toJson() {
    return {
      success: this.success,
      data: this.data ? this.data.toJson() : null,
      message: this.message,
    };
  }
}

export class ListResponse {
  constructor({ success, data, message }) {
    this.success = success;
    this.data = data ? data.map(user => new UserData(user)) : null;
    this.message = message;
  }

  static fromJson(json) {
    return new ListResponse({
      success: json.success,
      data: json.data ? json.data.map(user => UserData.fromJson(user)) : null,
      message: json.message,
    });
  }

  toJson() {
    return {
      success: this.success,
      data: this.data ? this.data.map(user => user.toJson()) : null,
      message: this.message,
    };
  }
}
