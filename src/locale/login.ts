const login = {
  title: 'ورود به اوزون',
  description: 'سامانه جامع خدمات',
  enterPhoneNumber: 'شماره موبایل خود را وارد کنید',
  TermsAndConditions: 'قوانین و شرایط',
  readAndAgree: ' را مطالعه کردم و با آن موافق هستم',
  verificationCode: 'ورود کد تایید',
  checkNumber: (val: string) => `کد تایید به شماره موبایل ${val} ارسال شد.`,
  changeNumber: 'تغییر شماره موبایل',
  entree: 'ورود',
  requestOTPAgain: 'ارسال مجدد',
  checkNumberForPassword: (val: string) => `کد تایید به شماره موبایل ${val} ارسال شد.`,
  passwordLabel: 'رمز عبور',
  forgetPasswordButton: ' فراموشی رمز عبور',
  loginWithOtp: 'ورود با رمز یک بار مصرف',
  choosePassword: 'انتخاب رمز عبور',
  choosePasswordForAccount: 'برای حساب کاربری خود، رمز عبور انتخاب کنید.',
  atLeast8Characters: 'حداقل ۸ کارکتر',
  includesLowercaseUppercase: 'شامل حروف کوچک و بزرگ انگلیسی',
  containsNumber: 'شامل یک عدد',
  includingSign: 'شامل علامت ( ! @ # $ % &*^)',
};

export default login;
