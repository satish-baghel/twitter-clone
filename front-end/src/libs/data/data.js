const footerData = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Download the X app",
    link: "/",
  },
  {
    name: "Help Center",
    link: "/",
  },
  {
    name: "Terms of Service",
    link: "/",
  },
  {
    name: "Privacy Policy",
    link: "/",
  },
  {
    name: "Cookie Policy",
    link: "/",
  },
  {
    name: "Accessibility",
    link: "/",
  },
  {
    name: "Ads info",
    link: "/",
  },
  {
    name: "Blog",
    link: "/",
  },
  {
    name: "Status",
    link: "/",
  },
  {
    name: "Careers",
    link: "/",
  },
  {
    name: "Brand Resources",
    link: "/",
  },
  {
    name: "Advertising",
    link: "/",
  },
  {
    name: "Marketing",
    link: "/",
  },
  {
    name: "X for Business",
    link: "/",
  },
  {
    name: "Developers",
    link: "/",
  },
  {
    name: "Directory",
    link: "/",
  },
  {
    name: "Settings",
    link: "/",
  },
  {
    name: `© ${new Date().getFullYear()} X Corp.`,
    link: "/",
  },
]
const Modal_Types = {
  LOGIN_MODAL: "LOGIN_MODAL",
  FORGOT_PASSWORD_MODAL: "FORGOT_PASSWORD_MODAL",
  REGISTER_MODAL: "REGISTER_MODAL",
}
const Months = [
  { label: "", value: "", disabled: true },
  { label: "January", value: 1 },
  { label: "February", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
]

export { Modal_Types as ModalTypes, footerData, Months }
