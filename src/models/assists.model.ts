//v3/home/assists
type AssistsModel = {
  kilometer?: kilometer;
  price?: price;
  used_fuel?: usedFuel;
  services?: services;
};

type kilometer = {
  updated_at: string;
  driving_distance: string;
};

type price = {
  up: boolean;
  price: string;
  price_change: string;
};

type usedFuel = {
  title: string;
  description: string;
  price: string;
};

type services = {
  title: string;
  updated_at: string;
  kilometer: string;
};
export default AssistsModel;
