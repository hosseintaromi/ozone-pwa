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
    buyFrom: 'خرید از ',
  },
  chooseWallet: {
    title: 'انتخاب حساب',
    subTitle: 'برای اطلاع از وضعیت واریز و برداشت، حساب مورد نظر را انتخاب کنید.',
  },
  profileDialog: {
    title: 'پروفایل',
    nameAndLastname: 'نام و نام‌خانوادگی',
    birthDate: 'تاریخ تولد',
    nationalCode: 'کدملی',
    phone: 'شماره موبایل',
    closeButton: 'بستن',
    kycButton: 'تکمیل احراز هویت',
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
    walletInactive: 'حساب غیر قابل استفاده برای خرید در فروشگاه است',
    walletActive: 'حساب قابل استفاده برای خرید در فروشگاه است',
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
  withdrawalNotAvailable: 'واریز و برداشت موجود نیست',
  setting: {
    title: 'تنظیمات',
    identityCompletionVerification: 'تکمیل احراز هویت',
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
  changePass: {
    title: 'تغییر رمز عبور',
    desc: 'رمز عبور جدید خود را وارد کنید.',
    input1: 'رمز عبور فعلی',
    input2: 'رمز عبور جدید',
    input3: 'تکرار رمز عبور جدید',
    button: 'تغییر رمز عبور',
  },
  scan: {
    title: 'بارکد خرید',
    subTitle: 'خرید حضوری با اوزون',
    desc: 'بارکد خرید را دریافت کنید و  برای تکمیل فرایند در اختیار صندوقدار قرار دهید.',
    button: 'دریافت بارکد',
    guideButton: 'سایر روش های پرداخت',
    hint: 'از صندوقدار بخواهید بارکد را اسکن کند',
    closeButton: 'بستن',
  },
  voucher: {
    title: 'کوپن‌ها',
    selectStore: 'انتخاب فروشگاه',
    couponSituation: 'وضعیت کوپن',
    couponType: 'نوع کوپن',
    couponCanDisable:
      'کوپن های را که می خواهید در خرید حضوری خرج نشود را می توانید غیر فعال کنید.',
    couponUnavailable: 'کوپن موجود نیست',
    couponDetails: 'جزئیات کوپن',
    discountType: 'نوع تخفیف',
    couponAmount: 'مبلغ خرید کوپن',
    couponCode: 'کد کوپن',
    minimumCart: 'حداقل سبد خرید',
    rialDiscount: 'تخفیف ریالی',
    percentDiscount: 'تخفیف درصدی',
    couponCanUseIn: 'کوپن قابل استفاده در فروشگاه های زیر است.',
  },
  cards: {
    minimumPurchase: (amount: number) => `حداقل سبد خرید ${amount.toLocaleString('fa')} ریال `,
    disposable: 'یکبار مصرف',
    useCouponTime: (days: number) => `قابل استفاده تا ${days} روز دیگر`,
    canNotUseCoupon: 'این کوپن قابل خرج با بعضی کوپن ها نیست',
    selected: 'انتخاب شده',
    selectCoupon: 'انتخاب کوپن',
    disposableCount: (c: number) => `${c} بار استفاده `,

    couponValue: (amount: number, percent?: number) =>
      percent
        ? ` کوپن ${percent} % به ارزش ${amount.toLocaleString('fa')} ریال`
        : `ارزش کوپن ${amount.toLocaleString('fa')} ریال `,
  },
};
export default app;
