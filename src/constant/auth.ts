const AUTH = {
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  grant_type: 'password',
  scope: '',
};
export default AUTH;
