export const __email__: RegExp =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const __passwords__ = {
  M8L1D1: {
    // Minimum eight characters, at least one letter and one number:
    type: "M8L1D1",
    expression: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  },
  M8L1D1S1: {
    // Minimum eight characters, at least one letter, one number and one special character:
    type: "M8L1D1S1",
    expression:
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  },
  M8L1U1D1S1: {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    type: "M8L1U1D1S1",
    expression: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/,
  },
  M6L1U1D1S1: {
    // Minimum six characters, at least one uppercase letter, one lowercase letter and one number:
    type: "M6L1U1D1S1",
    expression: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,15}$/,
  },
};

export const __phoneNumber__: RegExp = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

export const __names__: RegExp =
  /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

export const __username__: RegExp =
  /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
