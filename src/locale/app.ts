const app = {
  transactions: 'تراکنش ها',
  emptyTransactions: 'تراکنش موجود نیست',
  payIn: 'واریز',
  purchaseDetail: {
    title: 'جزئیات خرید',
    totalAmount: 'کل مبلغ فاکتور',
    useCoupon: 'استفاده از کوپن',
    withdraw: 'برداشت از حساب',
    amountPaid: 'مبلغ پرداخت شده',
    issueTracking: 'شماره پیگیری',
    accountNumber: 'شماره صورت حساب',
    purchasedGoods: 'نمایش کالاهای خریداری شده',
    listGoods: 'لیست کالا ها',
    row: 'ردیف',
    product: 'کالا',
    price: 'قیمت',
  },
  chooseWallet: {
    title: 'انتخاب حساب',
    subTitle: 'برای اطلاع از وضعیت واریز و برداشت، حساب مورد نظر را انتخاب کنید.',
  },
  addWallet: {
    title: 'افزودن حساب',
    step1Title: 'انتخاب سرویس',
    step2Title: 'کد تایید',
    confirmAndBack: 'تایید و بازگشت',
    confirm: 'تایید',
    step3Title: 'تایید حساب',
    step1SubTitle: 'سرویس مورد نظر را جهت افزودن حساب اعتباری انتخاب کنید.',
    step2SubTitle: 'کد تایید را وارد کنید ',
    step2Desc: (tell) => `کد تایید به شماره موبایل ${tell} ارسال شد.`,
    step3Subtitle: 'برای افزودن حساب های اعتباری زیر، روی دکمه تایید حساب بزنید.',
  },
  wallets: {
    title: 'حساب ها',
    walletName: (name: string) => `حساب ${name} `,
    discountRebon: (dis: number) => ` ${dis} ٪ تخفیف `,
    inventoryIncrease: 'افزایش موجودی',
  },
  payDialog: {
    title: 'افزایش موجودی',
    subTitle: 'مبلغ مورد نظر را جهت افزایش موجودی اوزون کارت مشخص کنید.',
    inputTitle: 'مبلغ (ریال)',
    inputHint: 'هزار تومان',
    button: 'افزایش موجودی',
  },
  daily: 'روزانه',
  monthly: 'ماهانه',
  weekly: 'هفتگی',
  getPhysicalCard: 'درخواست اوزون‌کارت فیزیکی',
  latestPurchases: 'آخرین خرید ها',
  setting: {
    title: 'تنظیمات',
    identityCompletionVerification: 'هویت تکمیل احراز',
    profile: 'پروفایل',
    changeCardPass: 'تغییر رمز کارت',
    changePass: 'تغییر رمز عبور ',
    help: 'راهنما  اوزون کارت',
    call: 'تماس با پشتیبانی',
    exit: 'خروج از برنامه',
    version: 'نسخه 0.0.8',
  },
  kyc: {
    title: 'احراز هویت',
    desc: 'لطفا کدملی و تاریخ تولد خود را وارد کنید.',
    nationalCode: 'کد ملی',
    dateBirth: 'تاریخ تولد',
    tip: (val: string) => `تاریخ تولد و کد ملی باید متعلق به مالک شماره موبایل ${val} باشد.`,
    doneTitle: 'احراز هویت شما با موفقیت انجام شد',
    backToApp: 'بازگشت به برنامه',
  },
};
export default app;
